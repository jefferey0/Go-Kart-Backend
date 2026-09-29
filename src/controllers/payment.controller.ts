import type { Request, Response } from "express";
import { sendSuccess } from "../utils/Response/api-response.ts";
import { paymentService } from "../services/payment.service.ts";
import { AppError } from "../utils/Response/http-error.ts";
import { isSupportedImageBuffer } from "../utils/image-security.ts";

export const paymentController = {
  async listMethods(req: Request, res: Response) {
    return sendSuccess(
      res,
      "Payment methods retrieved",
      await paymentService.listMethods(req.query.type as string | undefined),
    );
  },

  async listAllMethods(_req: Request, res: Response) {
    return sendSuccess(res, "Payment methods retrieved", await paymentService.listAllMethods());
  },

  async createMethod(req: Request, res: Response) {
    return sendSuccess(res, "Payment method created", await paymentService.createMethod(req.body), 201);
  },

  async updateMethod(req: Request, res: Response) {
    return sendSuccess(
      res,
      "Payment method updated",
      await paymentService.updateMethod(req.params.methodId as string, req.body),
    );
  },

  async initialize(req: Request, res: Response) {
    const userId = req.user?.userId;
    if (!userId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
    const paymentMethodId = req.body.paymentMethodId;
    if (typeof paymentMethodId !== "string" || !paymentMethodId) {
      throw new AppError(400, "Payment method is required", "PAYMENT_METHOD_REQUIRED");
    }
    return sendSuccess(
      res,
      "Payment method selected",
      await paymentService.initializeForOrder(req.params.orderId as string, userId, paymentMethodId),
      201
    );
  },

  async submitProof(req: Request, res: Response) {
    const userId = req.user?.userId;
    if (!userId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
    if (!req.file || !isSupportedImageBuffer(req.file.buffer)) {
      throw new AppError(400, "A valid JPEG, PNG, GIF, or WebP image is required", "INVALID_IMAGE");
    }
    return sendSuccess(
      res,
      "Payment screenshot submitted",
      await paymentService.submitProof(req.params.paymentId as string, userId, req.file),
      201,
    );
  },

  async getStatus(req: Request, res: Response) {
    const userId = req.user?.userId;
    if (!userId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
    return sendSuccess(
      res,
      "Payment retrieved",
      await paymentService.getPaymentStatus(req.params.providerTransactionId as string, userId),
    );
  },

  async listReviewQueue(_req: Request, res: Response) {
    return sendSuccess(
      res,
      "Payments awaiting review retrieved",
      await paymentService.listReviewQueue(),
    );
  },

  async reviewPayment(req: Request, res: Response) {
    return sendSuccess(
      res,
      "Payment reviewed",
      await paymentService.reviewPayment(req.params.paymentId as string, req.body.status),
    );
  },
};
