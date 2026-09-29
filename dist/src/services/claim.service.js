import prisma from "../lib/prisma.js";
import { AppError } from "../utils/Response/http-error.js";
export const claimService = {
    async getMyWins(userId) {
        const winners = await prisma.winner.findMany({
            where: { userId },
            orderBy: { selectedAt: "desc" },
            select: {
                id: true,
                giveawayId: true,
                giveaway: {
                    select: {
                        id: true,
                        title: true,
                        slug: true,
                        endDate: true,
                        prize: {
                            select: {
                                name: true,
                                images: {
                                    select: { url: true, sortOrder: true },
                                    orderBy: { sortOrder: "asc" },
                                },
                            },
                        },
                    },
                },
                ticket: { select: { ticketNumber: true } },
                claim: { select: { status: true } },
            },
        });
        return winners.map(({ giveaway, ...winner }) => ({
            ...winner,
            giveaway: {
                id: giveaway.id,
                title: giveaway.title,
                slug: giveaway.slug,
                endDate: giveaway.endDate,
                image: giveaway.prize?.images[0]?.url ?? null,
                prize: giveaway.prize ? { name: giveaway.prize.name } : null,
            },
        }));
    },
    async getPublicWinners() {
        const winners = await prisma.winner.findMany({
            orderBy: { selectedAt: "desc" },
            take: 20,
            select: {
                selectedAt: true,
                user: { select: { firstName: true, lastName: true } },
                giveaway: {
                    select: {
                        title: true,
                        slug: true,
                        prize: { select: { name: true } },
                    },
                },
            },
        });
        return winners.map(({ selectedAt, user, giveaway }) => ({
            displayName: `${user.firstName} ${user.lastName.charAt(0)}.`,
            selectedAt,
            giveaway: {
                title: giveaway.title,
                slug: giveaway.slug,
                prize: giveaway.prize ? { name: giveaway.prize.name } : null,
            },
        }));
    },
    async getMyWin(userId, id) {
        const winner = await prisma.winner.findFirst({
            where: { id, userId },
            include: {
                giveaway: { include: { prize: { include: { images: true } } } },
                ticket: true,
                claim: true,
            },
        });
        if (!winner)
            throw new AppError(404, "Win not found", "WIN_NOT_FOUND");
        return winner;
    },
    async claim(userId, id) {
        const winner = await this.getMyWin(userId, id);
        if (!winner.claim)
            throw new AppError(404, "Prize claim not found", "CLAIM_NOT_FOUND");
        return prisma.prizeClaim.update({
            where: { id: winner.claim.id },
            data: { status: "CLAIMED", claimedAt: new Date() },
        });
    },
    async confirmDelivery(userId, id) {
        const winner = await this.getMyWin(userId, id);
        if (!winner.claim)
            throw new AppError(404, "Prize claim not found", "CLAIM_NOT_FOUND");
        return prisma.$transaction(async (tx) => {
            const claim = await tx.prizeClaim.update({
                where: { id: winner.claim.id },
                data: { status: "CONFIRMED", confirmedAt: new Date() },
            });
            await tx.winner.update({ where: { id }, data: { status: "COMPLETED" } });
            return claim;
        });
    },
};
//# sourceMappingURL=claim.service.js.map