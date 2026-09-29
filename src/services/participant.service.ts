import { participantRepository } from "../repository/participant.repository.ts";
import prisma from "../lib/prisma.ts";
import { AppError } from "../utils/Response/http-error.ts";

export const participantService = {

      async getAll(
            giveawayId: string,
            search?: string
      ) {

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
                  throw new AppError(
                        404,
                        "Giveaway not found",
                        "GIVEAWAY_NOT_FOUND"
                  );
            }

            const participants =
                  await participantRepository.getAll(
                        giveawayId,
                        search
                  );

            return {
                  giveaway,
                  participants,
                  total: participants.length,
            };
      },


      async getByUserId(
            giveawayId: string,
            userId: string
      ) {

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
                  throw new AppError(
                        404,
                        "Giveaway not found",
                        "GIVEAWAY_NOT_FOUND"
                  );
            }

            const participant =
                  await participantRepository.getByUserId(
                        giveawayId,
                        userId
                  );

            if (!participant) {
                  throw new AppError(
                        404,
                        "Participant not found",
                        "PARTICIPANT_NOT_FOUND"
                  );
            }

            return {
                  giveaway,
                  participant,
            };
      },
};