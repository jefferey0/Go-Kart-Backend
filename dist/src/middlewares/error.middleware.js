import logger from "../logger.js";
import { AppError } from "../utils/Response/http-error.js";
export const errorHandler = (error, req, res, next) => {
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
//# sourceMappingURL=error.middleware.js.map