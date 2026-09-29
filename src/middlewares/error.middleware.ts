import type { Request, Response, NextFunction } from "express";
import logger from "../logger.ts";
import { AppError } from "../utils/Response/http-error.ts";


export const errorHandler = ( error: unknown, req: Request, res: Response, next: NextFunction ) => {
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
            code: "INTERNAL_SERVER_ERROR",
      });
};