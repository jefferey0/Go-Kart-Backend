import express from "express";
import { paymentController } from "../controllers/payment.controller.js";
import { authorize, protectedAction } from "../middlewares/protected.middleware.js";
import upload from "../middlewares/upload.js";
import { asyncHandler } from "../utils/async-handler.js";
const router = express.Router();
router.get("/methods", asyncHandler(paymentController.listMethods));
router.get("/admin/methods", protectedAction, authorize("ADMIN"), asyncHandler(paymentController.listAllMethods));
router.post("/admin/methods", protectedAction, authorize("ADMIN"), asyncHandler(paymentController.createMethod));
router.patch("/admin/methods/:methodId", protectedAction, authorize("ADMIN"), asyncHandler(paymentController.updateMethod));
router.get("/admin/review-queue", protectedAction, authorize("ADMIN"), asyncHandler(paymentController.listReviewQueue));
router.patch("/admin/:paymentId/review", protectedAction, authorize("ADMIN"), asyncHandler(paymentController.reviewPayment));
router.post("/orders/:orderId/initialize", protectedAction, asyncHandler(paymentController.initialize));
router.post("/:paymentId/proof", protectedAction, upload.single("screenshot"), asyncHandler(paymentController.submitProof));
router.get("/:providerTransactionId", protectedAction, asyncHandler(paymentController.getStatus));
export default router;
//# sourceMappingURL=payment.route.js.map