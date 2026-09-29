import { randomUUID } from "node:crypto";
import { AppError } from "../utils/Response/http-error.js";
import { orderRepository } from "../repository/order.repository.js";
import { paymentRepository } from "../repository/payment.repository.js";
import { orderService } from "./order.service.js";
import { uploadSingleImage } from "../utils/uploadSingleImage.js";
const methodTypes = ["CRYPTO", "PAYMENT_APP"];
const methodProviders = ["BITCOIN", "ETHEREUM", "PAYPAL", "CASH_APP", "VENMO", "ZELLE", "OTHER"];
const cryptoProviders = ["BITCOIN", "ETHEREUM", "OTHER"];
const appProviders = ["PAYPAL", "CASH_APP", "VENMO", "ZELLE", "OTHER"];
export const paymentService = {
    async listMethods(type) {
        if (type && !methodTypes.includes(type)) {
            throw new AppError(400, "Payment type must be CRYPTO or PAYMENT_APP", "INVALID_PAYMENT_TYPE");
        }
        return paymentRepository.listActiveMethods(type);
    },
    async listAllMethods() {
        return paymentRepository.listMethods();
    },
    async createMethod(data) {
        this.validateMethod(data);
        return paymentRepository.createMethod({
            type: data.type,
            provider: data.provider,
            name: data.name.trim(),
            details: data.details.trim(),
            network: data.network?.trim() || null,
            sortOrder: data.sortOrder ?? 0,
            isActive: data.isActive ?? true,
        });
    },
    async updateMethod(id, data) {
        if (data.type && !methodTypes.includes(data.type)) {
            throw new AppError(400, "Invalid payment method type", "INVALID_PAYMENT_TYPE");
        }
        if (data.provider && !methodProviders.includes(data.provider)) {
            throw new AppError(400, "Invalid payment provider", "INVALID_PAYMENT_PROVIDER");
        }
        if (data.name !== undefined && !data.name.trim()) {
            throw new AppError(400, "Payment method name is required", "INVALID_PAYMENT_METHOD");
        }
        if (data.details !== undefined && !data.details.trim()) {
            throw new AppError(400, "Payment instructions are required", "INVALID_PAYMENT_METHOD");
        }
        return paymentRepository.updateMethod(id, {
            ...(data.type !== undefined ? { type: data.type } : {}),
            ...(data.provider !== undefined ? { provider: data.provider } : {}),
            ...(data.name !== undefined ? { name: data.name.trim() } : {}),
            ...(data.details !== undefined ? { details: data.details.trim() } : {}),
            ...(data.network !== undefined ? { network: data.network?.trim() || null } : {}),
            ...(data.sortOrder !== undefined ? { sortOrder: data.sortOrder } : {}),
            ...(data.isActive !== undefined ? { isActive: data.isActive } : {}),
        });
    },
    async createOrder(data, userId) {
        const method = await paymentRepository.findActiveMethod(data.paymentMethodId);
        if (!method)
            throw new AppError(404, "Active payment method not found", "PAYMENT_METHOD_NOT_FOUND");
        const order = await orderService.create(data, userId);
        const payment = await this.initializeForOrder(order.id, userId, data.paymentMethodId);
        return { order, ...payment };
    },
    async initializeForOrder(orderId, userId, paymentMethodId) {
        const order = await orderRepository.getById(orderId);
        if (!order)
            throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
        if (order.userId !== userId)
            throw new AppError(403, "You cannot pay for this order", "FORBIDDEN");
        if (order.status !== "PENDING")
            throw new AppError(409, "Order is not awaiting payment", "ORDER_NOT_PENDING");
        const method = await paymentRepository.findActiveMethod(paymentMethodId);
        if (!method)
            throw new AppError(404, "Active payment method not found", "PAYMENT_METHOD_NOT_FOUND");
        const existingPayment = await paymentRepository.findByOrderId(order.id);
        if (existingPayment) {
            if (existingPayment.paymentMethodId !== method.id) {
                throw new AppError(409, "A payment method has already been selected", "PAYMENT_METHOD_ALREADY_SELECTED");
            }
            return { payment: existingPayment, paymentInstructions: existingPayment.paymentMethod };
        }
        const payment = await paymentRepository.create({
            orderId: order.id,
            paymentMethodId: method.id,
            provider: method.provider,
            providerTransactionId: `MANUAL-${randomUUID()}`,
            amount: order.totalAmount,
            currency: order.giveaway.currency,
        });
        return { payment, paymentInstructions: method };
    },
    async submitProof(paymentId, userId, file) {
        if (!file)
            throw new AppError(400, "Payment screenshot is required", "PROOF_REQUIRED");
        const payment = await paymentRepository.findById(paymentId);
        if (!payment || payment.order.userId !== userId) {
            throw new AppError(404, "Payment not found", "PAYMENT_NOT_FOUND");
        }
        if (payment.status !== "PENDING" || payment.order.status !== "PENDING") {
            throw new AppError(409, "Payment is not awaiting proof", "PAYMENT_NOT_PENDING");
        }
        const proofImageUrl = await uploadSingleImage(file.buffer, file.originalname);
        return paymentRepository.submitProof(paymentId, proofImageUrl);
    },
    async getPaymentStatus(providerTransactionId, userId) {
        const payment = await paymentRepository.findByProviderTransactionId(providerTransactionId);
        if (!payment || payment.order.userId !== userId) {
            throw new AppError(404, "Payment not found", "PAYMENT_NOT_FOUND");
        }
        return payment;
    },
    async listReviewQueue() {
        return paymentRepository.listReviewQueue();
    },
    async reviewPayment(paymentId, status) {
        const payment = await paymentRepository.findById(paymentId);
        if (!payment)
            throw new AppError(404, "Payment not found", "PAYMENT_NOT_FOUND");
        if (!payment.proofImageUrl)
            throw new AppError(409, "Payment proof has not been submitted", "PROOF_REQUIRED");
        if (payment.status !== "PENDING")
            throw new AppError(409, "Payment has already been reviewed", "PAYMENT_ALREADY_REVIEWED");
        if (status === "SUCCESS") {
            const confirmed = await paymentRepository.confirm(paymentId);
            if (!confirmed)
                throw new AppError(409, "Payment or order is no longer pending", "PAYMENT_NOT_PENDING");
            return confirmed;
        }
        if (status === "FAILED") {
            const rejected = await paymentRepository.reject(paymentId);
            if (!rejected)
                throw new AppError(409, "Payment or order is no longer pending", "PAYMENT_NOT_PENDING");
            return rejected;
        }
        throw new AppError(400, "Review status must be SUCCESS or FAILED", "INVALID_PAYMENT_STATUS");
    },
    validateMethod(data) {
        if (!methodTypes.includes(data.type)) {
            throw new AppError(400, "Invalid payment method type", "INVALID_PAYMENT_TYPE");
        }
        if (!methodProviders.includes(data.provider)) {
            throw new AppError(400, "Invalid payment provider", "INVALID_PAYMENT_PROVIDER");
        }
        const validProviders = data.type === "CRYPTO" ? cryptoProviders : appProviders;
        if (!validProviders.includes(data.provider)) {
            throw new AppError(400, "Provider is not valid for the selected payment type", "INVALID_PAYMENT_PROVIDER");
        }
        if (!data.name?.trim() || !data.details?.trim()) {
            throw new AppError(400, "Payment method name and instructions are required", "INVALID_PAYMENT_METHOD");
        }
        if (data.sortOrder !== undefined && (!Number.isInteger(data.sortOrder) || data.sortOrder < 0)) {
            throw new AppError(400, "Sort order must be a non-negative integer", "INVALID_SORT_ORDER");
        }
    },
};
//# sourceMappingURL=payment.service.js.map