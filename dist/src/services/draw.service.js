import { AppError } from "../utils/Response/http-error.js";
import { drawRepository } from "../repository/draw.repository.js";
export const drawService = {
    async selectWinners(giveawayId, ticketIds, actorId) {
        return drawRepository.selectWinners(giveawayId, ticketIds, actorId);
    },
    // Backward-compatible helper for existing callers.
    async selectWinner(giveawayId, ticketId, actorId) {
        return drawRepository.selectWinners(giveawayId, [ticketId], actorId);
    },
    async draw(_giveawayId, _actorId) {
        throw new AppError(410, "Automatic winner selection is disabled. Winners must be selected manually by an admin.", "AUTOMATIC_DRAW_DISABLED");
    },
};
//# sourceMappingURL=draw.service.js.map