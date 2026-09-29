import prisma from "../lib/prisma.js";
import { getPagination } from "../utils/pagination.js";
export const notificationService = {
    async list(userId, query) {
        const { page, limit, skip } = getPagination(query.page, query.limit);
        const where = { userId };
        const [data, total] = await prisma.$transaction([
            prisma.notification.findMany({
                where,
                skip,
                take: limit,
                orderBy: { createdAt: "desc" },
            }),
            prisma.notification.count({ where }),
        ]);
        return {
            data,
            pagination: { page, limit, total, totalPages: Math.ceil(total / limit) },
        };
    },
    async markRead(userId, id) {
        return prisma.notification.updateMany({
            where: { id, userId },
            data: { read: true },
        });
    },
    async markAllRead(userId) {
        return prisma.notification.updateMany({
            where: { userId, read: false },
            data: { read: true },
        });
    },
};
//# sourceMappingURL=notification.service.js.map