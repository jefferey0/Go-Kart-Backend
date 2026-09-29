import express from "express";
import { authorize, protectedAction } from "../middlewares/protected.middleware.ts";
import { giveawayController } from "../controllers/giveaway.controller.ts";
import { asyncHandler } from "../utils/async-handler.ts";
import { uploadImageController } from "../controllers/upload.controller.ts";
import upload from "../middlewares/upload.ts";


const router = express.Router();

router.post('/create', protectedAction, authorize('ADMIN'), asyncHandler(giveawayController.createGiveaway));

router.post('/upload', protectedAction, authorize('ADMIN'), upload.array('images', 6), asyncHandler(uploadImageController.giveawayImageUpload));

router.get('/', asyncHandler(giveawayController.getAllGiveaway) );

router.get('/:id/winner', asyncHandler(giveawayController.getWinner));

router.get('/:id', asyncHandler(giveawayController.getGiveawayById));

router.get('/slug/:slug', asyncHandler(giveawayController.getGiveawayBySlug));

router.patch('/:id', protectedAction, authorize('ADMIN'), asyncHandler(giveawayController.update));

router.delete('/:id', protectedAction, authorize('ADMIN'), asyncHandler(giveawayController.deleteGiveaway));



const giveawayRoute = router;
export default giveawayRoute