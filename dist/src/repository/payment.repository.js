import prisma from "../lib/prisma.js";
import { AppError } from "../utils/Response/http-error.js";
const paymentInclude = {
    order: {
        include: {
            giveaway: { select: { id: true, title: true, currency: true } },
            user: { select: { id: true, firstName: true, lastName: true, email: true } },
        },
    },
    paymentMethod: true,
};
export const paymentRepository = {
    async listActiveMethods(type) {
        return prisma.paymentMethod.findMany({
            where: { isActive: true, ...(type ? { type } : {}) },
            orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
        });
    },
    async findActiveMethod(id) {
        return prisma.paymentMethod.findFirst({ where: { id, isActive: true } });
    },
    async listMethods() {
        return prisma.paymentMethod.findMany({ orderBy: [{ sortOrder: "asc" }, { name: "asc" }] });
    },
    async createMethod(data) {
        return prisma.paymentMethod.create({ data });
    },
    async updateMethod(id, data) {
        return prisma.paymentMethod.update({ where: { id }, data });
    },
    async create(data) {
        return prisma.payment.create({ data, include: paymentInclude });
    },
    async findByOrderId(orderId) {
        return prisma.payment.findUnique({ where: { orderId }, include: paymentInclude });
    },
    async findByProviderTransactionId(providerTransactionId) {
        return prisma.payment.findUnique({ where: { providerTransactionId }, include: paymentInclude });
    },
    async findById(id) {
        return prisma.payment.findUnique({ where: { id }, include: paymentInclude });
    },
    async listReviewQueue() {
        return prisma.payment.findMany({
            where: { status: "PENDING", proofImageUrl: { not: null } },
            include: paymentInclude,
            orderBy: { updatedAt: "asc" },
        });
    },
    async submitProof(id, proofImageUrl) {
        return prisma.payment.update({ where: { id }, data: { proofImageUrl }, include: paymentInclude });
    },
    async confirm(id) {
        return prisma.$transaction(async (transaction) => {
            const payment = await transaction.payment.findUnique({
                where: { id },
                include: { order: true },
            });
            if (!payment || payment.status !== "PENDING" || !payment.proofImageUrl)
                return null;
            const orderUpdate = await transaction.order.updateMany({
                where: { id: payment.orderId, status: "PENDING" },
                data: { status: "CONFIRMED" },
            });
            if (orderUpdate.count !== 1)
                return null;
            const giveaway = await transaction.giveaway.findUnique({
                where: { id: payment.order.giveawayId },
                select: { maximumEntries: true },
            });
            if (!giveaway)
                throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
            const giveawayUpdate = await transaction.giveaway.updateMany({
                where: {
                    id: payment.order.giveawayId,
                    entriesSold: { lte: giveaway.maximumEntries - payment.order.quantity },
                },
                data: { entriesSold: { increment: payment.order.quantity } },
            });
            if (giveawayUpdate.count !== 1) {
                throw new AppError(409, "Not enough entries remaining", "ENTRY_LIMIT_REACHED");
            }
            const paymentUpdate = await transaction.payment.updateMany({
                where: { id, status: "PENDING", proofImageUrl: { not: null } },
                data: { status: "SUCCESS" },
            });
            if (paymentUpdate.count !== 1) {
                throw new AppError(409, "Payment is no longer pending", "PAYMENT_NOT_PENDING");
            }
            await transaction.ticket.createMany({
                data: Array.from({ length: payment.order.quantity }, (_, index) => ({
                    ticketNumber: `${payment.order.orderNumber}-${String(index + 1).padStart(6, "0")}`,
                    userId: payment.order.userId,
                    giveawayId: payment.order.giveawayId,
                    orderId: payment.orderId,
                })),
            });
            return transaction.payment.findUnique({ where: { id }, include: paymentInclude });
        });
    },
    async reject(id) {
        return prisma.$transaction(async (transaction) => {
            const payment = await transaction.payment.findUnique({ where: { id } });
            if (!payment || payment.status !== "PENDING" || !payment.proofImageUrl)
                return null;
            const orderUpdate = await transaction.order.updateMany({
                where: { id: payment.orderId, status: "PENDING" },
                data: { status: "FAILED" },
            });
            if (orderUpdate.count !== 1)
                return null;
            await transaction.payment.update({ where: { id }, data: { status: "FAILED" } });
            return transaction.payment.findUnique({ where: { id }, include: paymentInclude });
        });
    },
};
//# sourceMappingURL=payment.repository.js.map