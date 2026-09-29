import { participantRepository } from "../repository/participant.repository.js";
import prisma from "../lib/prisma.js";
import { AppError } from "../utils/Response/http-error.js";
export const participantService = {
    async getAll(giveawayId, search) {
        const giveaway = await prisma.giveaway.findUnique({
            where: {
                id: giveawayId,
            },
            select: {
                id: true,
                title: true,
                slug: true,
            },
        });
        if (!giveaway) {
            throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
        }
        const participants = await participantRepository.getAll(giveawayId, search);
        return {
            giveaway,
            participants,
            total: participants.length,
        };
    },
    async getByUserId(giveawayId, userId) {
        const giveaway = await prisma.giveaway.findUnique({
            where: {
                id: giveawayId,
            },
            select: {
                id: true,
                title: true,
                slug: true,
            },
        });
        if (!giveaway) {
            throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
        }
        const participant = await participantRepository.getByUserId(giveawayId, userId);
        if (!participant) {
            throw new AppError(404, "Participant not found", "PARTICIPANT_NOT_FOUND");
        }
        return {
            giveaway,
            participant,
        };
    },
};
//# sourceMappingURL=participant.service.js.map