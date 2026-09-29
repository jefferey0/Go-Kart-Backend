import type { Request, Response } from "express";

import { participantService } from "../services/participant.service.ts";

import logger from "../logger.ts";

import { AppError } from "../utils/Response/http-error.ts";


export const participantController = {

      async getAll(req: Request, res: Response) {

            try {

                  const giveawayId = req.params.giveawayId as string;

                  const search = req.query.search as string | undefined;

                  const result = await participantService.getAll( giveawayId, search );

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Participants retrieved successfully",
                        data: result,
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


      async getByUserId(req: Request, res: Response) {

            try {

                  const giveawayId =
                        req.params.giveawayId as string;

                  const userId =
                        req.params.userId as string;

                  const result =
                        await participantService.getByUserId(
                              giveawayId,
                              userId
                        );

                  return res.status(200).json({
                        error: false,
                        status: 200,
                        message: "Participant retrieved successfully",
                        data: result,
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