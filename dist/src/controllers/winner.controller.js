import { claimService } from "../services/claim.service.js";
import { sendSuccess } from "../utils/Response/api-response.js";
import { AppError } from "../utils/Response/http-error.js";
function requireUserId(req) {
    const userId = req.user?.userId;
    if (!userId)
        throw new AppError(401, "Authentication required", "UNAUTHORIZED");
    return userId;
}
export const winnerController = {
    async getMyWins(req, res) {
        return sendSuccess(res, "Your wins retrieved successfully", await claimService.getMyWins(requireUserId(req)));
    },
    async claim(req, res) {
        return sendSuccess(res, "Prize claimed successfully", await claimService.claim(requireUserId(req), req.params.winnerId));
    },
    async getPublicWinners(_req, res) {
        return sendSuccess(res, "Recent winners retrieved successfully", await claimService.getPublicWinners());
    },
};
//# sourceMappingURL=winner.controller.js.map