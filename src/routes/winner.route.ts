import express from "express";
import { winnerController } from "../controllers/winner.controller.ts";
import { protectedAction } from "../middlewares/protected.middleware.ts";
import { asyncHandler } from "../utils/async-handler.ts";

const router = express.Router();

router.get("/", asyncHandler(winnerController.getPublicWinners));
router.get("/me", protectedAction, asyncHandler(winnerController.getMyWins));
router.post("/:winnerId/claim", protectedAction, asyncHandler(winnerController.claim));

export default router;