import express from "express";
import { winnerController } from "../controllers/winner.controller.js";
import { protectedAction } from "../middlewares/protected.middleware.js";
import { asyncHandler } from "../utils/async-handler.js";
const router = express.Router();
router.get("/", asyncHandler(winnerController.getPublicWinners));
router.get("/me", protectedAction, asyncHandler(winnerController.getMyWins));
router.post("/:winnerId/claim", protectedAction, asyncHandler(winnerController.claim));
export default router;
//# sourceMappingURL=winner.route.js.map