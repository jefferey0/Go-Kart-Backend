import { participantService } from "../services/participant.service.js";
import logger from "../logger.js";
import { AppError } from "../utils/Response/http-error.js";
export const participantController = {
    async getAll(req, res) {
        try {
            const giveawayId = req.params.giveawayId;
            const search = req.query.search;
            const result = await participantService.getAll(giveawayId, search);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Participants retrieved successfully",
                data: result,
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
    async getByUserId(req, res) {
        try {
            const giveawayId = req.params.giveawayId;
            const userId = req.params.userId;
            const result = await participantService.getByUserId(giveawayId, userId);
            return res.status(200).json({
                error: false,
                status: 200,
                message: "Participant retrieved successfully",
                data: result,
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
//# sourceMappingURL=participant.controller.js.map