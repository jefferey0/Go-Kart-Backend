import { orderRepository } from "../repository/order.repository.js";
import { userRepository } from "../repository/UserRepository.js";
import { AppError } from "../utils/Response/http-error.js";
import prisma from "../lib/prisma.js";
import { generateOrderNumber } from "../utils/generateOrderNumber.js";
export const orderService = {
    async create(data, userId) {
        const quantity = Number(data.quantity);
        const idempotencyKey = data.idempotencyKey?.trim() || undefined;
        if (!data.giveawayId || !Number.isSafeInteger(quantity) || quantity < 1) {
            throw new AppError(400, "A giveaway and valid quantity are required", "INVALID_ORDER");
        }
        if (idempotencyKey) {
            const existingOrder = await prisma.order.findUnique({
                where: {
                    userId_idempotencyKey: {
                        userId,
                        idempotencyKey,
                    },
                },
            });
            if (existingOrder)
                return existingOrder;
        }
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw new AppError(404, "User not found", "USER_NOT_FOUND");
        }
        const giveaway = await prisma.giveaway.findUnique({
            where: {
                id: data.giveawayId,
            },
        });
        if (!giveaway) {
            throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
        }
        if (giveaway.status !== "ACTIVE") {
            throw new AppError(400, "This giveaway is not currently active", "GIVEAWAY_NOT_ACTIVE");
        }
        if (new Date() < giveaway.startDate) {
            throw new AppError(400, "This giveaway has not started yet", "GIVEAWAY_NOT_STARTED");
        }
        if (new Date() > giveaway.endDate) {
            throw new AppError(400, "This giveaway has ended", "GIVEAWAY_ENDED");
        }
        if (quantity < giveaway.minimumEntriesPerPurchase) {
            throw new AppError(400, `Minimum purchase is ${giveaway.minimumEntriesPerPurchase} entries`, "MINIMUM_ENTRIES_NOT_MET");
        }
        if (quantity > giveaway.maximumEntriesPerUser) {
            throw new AppError(400, `Maximum entries per user is ${giveaway.maximumEntriesPerUser}`, "MAXIMUM_ENTRIES_PER_USER_EXCEEDED");
        }
        const existingEntries = await prisma.order.aggregate({
            where: {
                userId,
                giveawayId: giveaway.id,
                status: { in: ["PENDING", "CONFIRMED"] },
            },
            _sum: { quantity: true },
        });
        if ((existingEntries._sum.quantity ?? 0) + quantity > giveaway.maximumEntriesPerUser) {
            throw new AppError(400, `Maximum entries per user is ${giveaway.maximumEntriesPerUser}`, "MAXIMUM_ENTRIES_PER_USER_EXCEEDED");
        }
        if (giveaway.entriesSold + quantity > giveaway.maximumEntries) {
            throw new AppError(400, "Not enough entries available", "MAXIMUM_ENTRIES_EXCEEDED");
        }
        const totalAmount = giveaway.entryPrice.mul(quantity);
        const order = await orderRepository.createOrder({
            orderNumber: generateOrderNumber(),
            quantity,
            unitPrice: giveaway.entryPrice,
            totalAmount,
            status: "PENDING",
            ...(idempotencyKey ? { idempotencyKey } : {}),
            user: {
                connect: { id: userId },
            },
            giveaway: {
                connect: { id: giveaway.id },
            },
        });
        return order;
    },
    async getAll() {
        return await orderRepository.getAll();
    },
    async getById(id) {
        const order = await orderRepository.getById(id);
        if (!order) {
            throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
        }
        return order;
    },
    async getByOrderNumber(orderNumber) {
        const order = await orderRepository.getByOrderNumber(orderNumber);
        if (!order) {
            throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
        }
        return order;
    },
    async getMyOrders(userId) {
        const user = await userRepository.getUserById(userId);
        if (!user) {
            throw new AppError(404, "User not found", "USER_NOT_FOUND");
        }
        return await orderRepository.getByUserId(userId);
    },
    async updateStatus(id, status) {
        const order = await orderRepository.getById(id);
        if (!order) {
            throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
        }
        return await orderRepository.updateStatus(id, status);
    },
    async delete(id, userId, isAdmin = false) {
        const order = await orderRepository.getById(id);
        if (!order) {
            throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
        }
        if (!isAdmin && order.userId !== userId) {
            throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
        }
        if (order.status === "CONFIRMED") {
            throw new AppError(400, "Confirmed orders cannot be deleted", "ORDER_CANNOT_BE_DELETED");
        }
        return await orderRepository.deleteOrder(id);
    },
};
//# sourceMappingURL=order.service.js.map