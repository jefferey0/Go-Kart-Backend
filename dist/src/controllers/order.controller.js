import { orderService } from "../services/order.service.js";
import { paymentService } from "../services/payment.service.js";
import logger from "../logger.js";
import { AppError } from "../utils/Response/http-error.js";
export const orderController = {
    async createOrder(req, res) {
        try {
            const userId = req.user?.userId;
            if (!userId) {
                throw new AppError(401, "Authentication required", "UNAUTHORIZED");
            }
            const order = await paymentService.createOrder(req.body, userId);
            return res.status(201).json({
                error: false,
                status: 201,
                message: "Order created. Follow the selected payment instructions and submit proof.",
                data: order,
            });
        }
        catch (error) {
            logger.error(error);
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    error: true,
                    status: error.statusCode,
                    message: error.message,
                    code: error.code,
                });
            }
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async getAll(req, res) {
        try {
            const orders = await orderService.getAll();
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Orders retrieved successfully",
                data: orders,
            });
        }
        catch (error) {
            logger.error(error);
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    error: true,
                    status: error.statusCode,
                    message: error.message,
                    code: error.code,
                });
            }
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async getById(req, res) {
        try {
            const userId = req.user?.userId;
            const isAdmin = req.user?.role === "ADMIN";
            if (!userId)
                throw new AppError(401, "Authentication required", "UNAUTHORIZED");
            const order = await orderService.getById(req.params.id);
            if (!isAdmin && order.userId !== userId) {
                throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
            }
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Order retrieved successfully",
                data: order,
            });
        }
        catch (error) {
            logger.error(error);
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    error: true,
                    status: error.statusCode,
                    message: error.message,
                    code: error.code,
                });
            }
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async getMyOrders(req, res) {
        try {
            const userId = req.user?.userId;
            if (!userId) {
                throw new AppError(401, "Authentication required", "UNAUTHORIZED");
            }
            const orders = await orderService.getMyOrders(userId);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Orders retrieved successfully",
                data: orders,
            });
        }
        catch (error) {
            logger.error(error);
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    error: true,
                    status: error.statusCode,
                    message: error.message,
                    code: error.code,
                });
            }
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async updateStatus(req, res) {
        try {
            const status = req.body.status;
            if (!status) {
                throw new AppError(400, "Order status is required", "STATUS_REQUIRED");
            }
            const order = await orderService.updateStatus(req.params.id, status);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Order status updated successfully",
                data: order,
            });
        }
        catch (error) {
            logger.error(error);
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    error: true,
                    status: error.statusCode,
                    message: error.message,
                    code: error.code,
                });
            }
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
    async deleteOrder(req, res) {
        try {
            const userId = req.user?.userId;
            const isAdmin = req.user?.role === "ADMIN";
            if (!userId)
                throw new AppError(401, "Authentication required", "UNAUTHORIZED");
            await orderService.delete(req.params.id, userId, isAdmin);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Order deleted successfully",
            });
        }
        catch (error) {
            logger.error(error);
            if (error instanceof AppError) {
                return res.status(error.statusCode).json({
                    error: true,
                    status: error.statusCode,
                    message: error.message,
                    code: error.code,
                });
            }
            return res.status(500).json({
                error: true,
                status: 500,
                message: "An error occurred",
            });
        }
    },
};
//# sourceMappingURL=order.controller.js.map