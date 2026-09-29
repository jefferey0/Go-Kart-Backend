import express from "express";

import { participantController } from "../controllers/participant.controller.ts";

import { protectedAction, authorize } from "../middlewares/protected.middleware.ts";


const router = express.Router();


router.get( "/giveaways/:giveawayId", protectedAction, authorize("ADMIN"), participantController.getAll );


router.get( "/giveaways/:giveawayId/participants/:userId", protectedAction, authorize("ADMIN"), participantController.getByUserId );


const participantRoute = router;

export default participantRoute;