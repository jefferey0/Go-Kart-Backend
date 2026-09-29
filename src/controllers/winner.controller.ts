import type { Request, Response } from "express";
import { claimService } from "../services/claim.service.ts";
import { sendSuccess } from "../utils/Response/api-response.ts";
import { AppError } from "../utils/Response/http-error.ts";

function requireUserId(req: Request) {
  const userId = req.user?.userId;
  if (!userId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
  return userId;
}

export const winnerController = {
  async getMyWins(req: Request, res: Response) {
    return sendSuccess(res, "Your wins retrieved successfully", await claimService.getMyWins(requireUserId(req)));
  },

  async claim(req: Request, res: Response) {
    return sendSuccess(
      res,
      "Prize claimed successfully",
      await claimService.claim(requireUserId(req), req.params.winnerId as string),
    );
  },

  async getPublicWinners(_req: Request, res: Response) {
    return sendSuccess(res, "Recent winners retrieved successfully", await claimService.getPublicWinners());
  },
};