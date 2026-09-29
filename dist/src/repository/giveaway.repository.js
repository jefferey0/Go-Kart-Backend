import prisma from "../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
export const giveawayRepository = {
    async createGiveaway(data) {
        return await prisma.giveaway.create({
            data,
            include: {
                category: true,
                prize: {
                    include: { images: true },
                }
            },
        });
    },
    async findGiveawayById(id) {
        return await prisma.giveaway.findUnique({
            where: { id },
            include: {
                category: true,
                prize: {
                    include: { images: true },
                }
            },
        });
    },
    async findGiveawayBySlug(slug) {
        return await prisma.giveaway.findUnique({
            where: { slug },
            include: {
                category: true,
                prize: {
                    include: { images: true },
                }
            },
        });
    },
    async findWinnerByGiveawayId(giveawayId) {
        return prisma.winner.findMany({
            where: { giveawayId },
            orderBy: { selectedAt: "asc" },
            select: {
                id: true,
                giveawayId: true,
                status: true,
                selectedAt: true,
                user: { select: { id: true, firstName: true, lastName: true } },
                ticket: { select: { id: true, ticketNumber: true, status: true } },
                draw: {
                    select: {
                        id: true,
                        algorithm: true,
                        totalEligibleTickets: true,
                        verificationHash: true,
                        completedAt: true,
                    },
                },
                claim: { select: { id: true, status: true, claimedAt: true, deliveredAt: true, confirmedAt: true } },
            },
        });
    },
    async findAllGiveaways(filters = {}) {
        return await prisma.giveaway.findMany({
            where: filters ? filters : {},
            include: {
                category: true,
                prize: {
                    include: { images: true },
                }
            },
            orderBy: { createdAt: 'desc' },
        });
    },
    async updateGiveaway(id, data) {
        return await prisma.giveaway.update({
            where: { id },
            data,
            include: {
                category: true,
                prize: true,
            },
        });
    },
    async deleteGiveaway(id) {
        return await prisma.giveaway.delete({
            where: { id },
        });
    },
};
//# sourceMappingURL=giveaway.repository.js.map