import prisma from "../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
const orderInclude = {
    user: {
        select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
        },
    },
    giveaway: {
        select: {
            id: true,
            title: true,
            slug: true,
            entryPrice: true,
            currency: true,
        },
    },
    payment: true,
    tickets: true,
};
export const orderRepository = {
    async createOrder(data) {
        return await prisma.order.create({
            data,
            include: orderInclude,
        });
    },
    async getAll() {
        return await prisma.order.findMany({
            include: orderInclude,
            orderBy: {
                createdAt: "desc",
            },
        });
    },
    async getById(id) {
        return await prisma.order.findUnique({
            where: {
                id,
            },
            include: orderInclude,
        });
    },
    async getByOrderNumber(orderNumber) {
        return await prisma.order.findUnique({
            where: {
                orderNumber,
            },
            include: orderInclude,
        });
    },
    async getByUserId(userId) {
        return await prisma.order.findMany({
            where: {
                userId,
            },
            include: orderInclude,
            orderBy: {
                createdAt: "desc",
            },
        });
    },
    async updateStatus(id, status) {
        return await prisma.order.update({
            where: {
                id,
            },
            data: {
                status,
            },
            include: orderInclude,
        });
    },
    async deleteOrder(id) {
        return await prisma.order.delete({
            where: {
                id,
            },
        });
    },
};
//# sourceMappingURL=order.repository.js.map