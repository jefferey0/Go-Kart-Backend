import { AppError } from "../utils/Response/http-error.ts";
import { drawRepository } from "../repository/draw.repository.ts";

export const drawService = {
  async selectWinners(giveawayId: string, ticketIds: string[], actorId: string) {
    return drawRepository.selectWinners(giveawayId, ticketIds, actorId);
  },

  // Backward-compatible helper for existing callers.
  async selectWinner(giveawayId: string, ticketId: string, actorId: string) {
    return drawRepository.selectWinners(giveawayId, [ticketId], actorId);
  },

  async draw(_giveawayId: string, _actorId: string) {
    throw new AppError(410, "Automatic winner selection is disabled. Winners must be selected manually by an admin.", "AUTOMATIC_DRAW_DISABLED");
  },

};
