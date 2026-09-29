import express from "express";
import { adminDeleteGiveaway, adminUpdateGiveaway, dashboard, getSettings, orders, participants, selectWinner, selectWinners, tickets, updateGiveawayStatus, updateSettings, users } from "../controllers/admin.controller.js";
import { authorize, protectedAction } from "../middlewares/protected.middleware.js";
import { asyncHandler } from "../utils/async-handler.js";
const router = express.Router();
router.get("/dashboard", protectedAction, authorize("ADMIN"), asyncHandler(dashboard));
router.get("/settings", protectedAction, authorize("ADMIN"), asyncHandler(getSettings));
router.patch("/settings", protectedAction, authorize("ADMIN"), asyncHandler(updateSettings));
router.get("/users", protectedAction, authorize("ADMIN"), asyncHandler(users));
router.get("/orders", protectedAction, authorize("ADMIN"), asyncHandler(orders));
// Admin has explicit control over the giveaway lifecycle.
router.patch("/giveaways/:giveawayId/status", protectedAction, authorize("ADMIN"), asyncHandler(updateGiveawayStatus));
router.patch("/giveaways/:giveawayId", protectedAction, authorize("ADMIN"), asyncHandler(adminUpdateGiveaway));
router.delete("/giveaways/:giveawayId", protectedAction, authorize("ADMIN"), asyncHandler(adminDeleteGiveaway));
router.get("/giveaways/:id/participants", protectedAction, authorize("ADMIN"), asyncHandler(participants));
router.get("/giveaways/:id/tickets", protectedAction, authorize("ADMIN"), asyncHandler(tickets));
router.post("/giveaways/:giveawayId/winners", protectedAction, authorize("ADMIN"), asyncHandler(selectWinners));
router.post("/giveaways/:giveawayId/winner", protectedAction, authorize("ADMIN"), asyncHandler(selectWinner));
export default router;
//# sourceMappingURL=admin.route.js.map