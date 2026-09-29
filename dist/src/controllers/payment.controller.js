import { sendSuccess } from "../utils/Response/api-response.js";
import { paymentService } from "../services/payment.service.js";
import { AppError } from "../utils/Response/http-error.js";
import { isSupportedImageBuffer } from "../utils/image-security.js";
export const paymentController = {
    async listMethods(req, res) {
        return sendSuccess(res, "Payment methods retrieved", await paymentService.listMethods(req.query.type));
    },
    async listAllMethods(_req, res) {
        return sendSuccess(res, "Payment methods retrieved", await paymentService.listAllMethods());
    },
    async createMethod(req, res) {
        return sendSuccess(res, "Payment method created", await paymentService.createMethod(req.body), 201);
    },
    async updateMethod(req, res) {
        return sendSuccess(res, "Payment method updated", await paymentService.updateMethod(req.params.methodId, req.body));
    },
    async initialize(req, res) {
        const userId = req.user?.userId;
        if (!userId)
            throw new AppError(401, "Authentication required", "UNAUTHORIZED");
        const paymentMethodId = req.body.paymentMethodId;
        if (typeof paymentMethodId !== "string" || !paymentMethodId) {
            throw new AppError(400, "Payment method is required", "PAYMENT_METHOD_REQUIRED");
        }
        return sendSuccess(res, "Payment method selected", await paymentService.initializeForOrder(req.params.orderId, userId, paymentMethodId), 201);
    },
    async submitProof(req, res) {
        const userId = req.user?.userId;
        if (!userId)
            throw new AppError(401, "Authentication required", "UNAUTHORIZED");
        if (!req.file || !isSupportedImageBuffer(req.file.buffer)) {
            throw new AppError(400, "A valid JPEG, PNG, GIF, or WebP image is required", "INVALID_IMAGE");
        }
        return sendSuccess(res, "Payment screenshot submitted", await paymentService.submitProof(req.params.paymentId, userId, req.file), 201);
    },
    async getStatus(req, res) {
        const userId = req.user?.userId;
        if (!userId)
            throw new AppError(401, "Authentication required", "UNAUTHORIZED");
        return sendSuccess(res, "Payment retrieved", await paymentService.getPaymentStatus(req.params.providerTransactionId, userId));
    },
    async listReviewQueue(_req, res) {
        return sendSuccess(res, "Payments awaiting review retrieved", await paymentService.listReviewQueue());
    },
    async reviewPayment(req, res) {
        return sendSuccess(res, "Payment reviewed", await paymentService.reviewPayment(req.params.paymentId, req.body.status));
    },
};
//# sourceMappingURL=payment.controller.js.map