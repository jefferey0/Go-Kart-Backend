import express from "express";

import { orderController } from "../controllers/order.controller.ts";

import { authorize, protectedAction } from "../middlewares/protected.middleware.ts";

const router = express.Router();

// Create order
router.post("/", protectedAction, orderController.createOrder);

// Get authenticated user's orders
router.get("/my-orders", protectedAction, orderController.getMyOrders);

// Get all orders
router.get("/", protectedAction, authorize("ADMIN"), orderController.getAll);

// Get single order
router.get("/:id", protectedAction, orderController.getById);

// Update order status
router.patch("/:id/status", protectedAction, authorize("ADMIN"), orderController.updateStatus);

// Delete order
router.delete("/:id", protectedAction, orderController.deleteOrder);

const orderRoute = router;

export default orderRoute;
