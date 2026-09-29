import type { Request, Response } from "express";
import { orderService } from "../services/order.service.ts";
import { paymentService } from "../services/payment.service.ts";
import logger from "../logger.ts";
import { AppError } from "../utils/Response/http-error.ts";
import type { OrderStatus } from "../../generated/prisma/enums.ts";

export const orderController = {

      async createOrder(req: Request, res: Response) {

            try {

                  const userId = req.user?.userId;

                  if (!userId) {
                        throw new AppError(
                              401,
                              "Authentication required",
                              "UNAUTHORIZED"
                        );
                  }

                  const order = await paymentService.createOrder(req.body, userId);

                  return res.status(201).json({
                        error: false,
                        status: 201,
                        message: "Order created. Follow the selected payment instructions and submit proof.",
                        data: order,
                  });

            } catch (error) {

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


      async getAll(req: Request, res: Response) {

            try {

                  const orders = await orderService.getAll();

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Orders retrieved successfully",
                        data: orders,
                  });

            } catch (error) {

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


      async getById(req: Request, res: Response) {

            try {

                  const userId = req.user?.userId;
                  const isAdmin = req.user?.role === "ADMIN";
                  if (!userId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
                  const order = await orderService.getById(req.params.id as string);
                  if (!isAdmin && order.userId !== userId) {
                        throw new AppError(404, "Order not found", "ORDER_NOT_FOUND");
                  }

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Order retrieved successfully",
                        data: order,
                  });

            } catch (error) {

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


      async getMyOrders(req: Request, res: Response) {

            try {

                  const userId = req.user?.userId;

                  if (!userId) {
                        throw new AppError(
                              401,
                              "Authentication required",
                              "UNAUTHORIZED"
                        );
                  }

                  const orders =
                        await orderService.getMyOrders(userId);

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Orders retrieved successfully",
                        data: orders,
                  });

            } catch (error) {

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


      async updateStatus(req: Request, res: Response) {

            try {

                  const status = req.body.status as OrderStatus;

                  if (!status) {
                        throw new AppError(
                              400,
                              "Order status is required",
                              "STATUS_REQUIRED"
                        );
                  }

                  const order =
                        await orderService.updateStatus(
                              req.params.id as string,
                              status
                        );

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Order status updated successfully",
                        data: order,
                  });

            } catch (error) {

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


      async deleteOrder(req: Request, res: Response) {

            try {

                  const userId = req.user?.userId;
                  const isAdmin = req.user?.role === "ADMIN";
                  if (!userId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
                  await orderService.delete(req.params.id as string, userId, isAdmin);

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Order deleted successfully",
                  });

            } catch (error) {

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