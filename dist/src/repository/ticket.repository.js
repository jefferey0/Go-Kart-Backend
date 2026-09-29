import prisma from "../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
export const ticketRepository = {
    async countByUserAndGiveaway(userId, giveawayId) {
        return prisma.ticket.count({
            where: {
                userId,
                giveawayId,
                status: { not: "INVALIDATED" },
            },
        });
    },
    async listByUser(userId, skip, take, giveawayId) {
        return prisma.ticket.findMany({
            where: {
                userId,
                ...(giveawayId ? { giveawayId } : {}),
            },
            skip,
            take,
            orderBy: {
                createdAt: "desc",
            },
            include: {
                giveaway: true,
            },
        });
    },
    async countByUser(userId, giveawayId) {
        return prisma.ticket.count({
            where: {
                userId,
                ...(giveawayId ? { giveawayId } : {}),
            },
        });
    },
    async create(data) {
        return await prisma.order.create({
            data,
            include: {
                user: { select: { id: true, firstName: true, lastName: true, email: true } },
                giveaway: { select: { id: true, title: true, slug: true } },
                tickets: true,
            },
        });
    },
};
//# sourceMappingURL=ticket.repository.js.map