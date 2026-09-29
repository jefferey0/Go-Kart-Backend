import jwt from "jsonwebtoken";
import ENV from "../config/env.config.js";
import logger from "../logger.js";
import prisma from "../lib/prisma.js";
export const protectedAction = async (req, res, next) => {
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json({
            status: false,
            message: "Unauthorized",
            data: [],
        });
    }
    const token = authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            status: false,
            message: "Unauthorized",
            data: [],
        });
    }
    try {
        const secret = ENV.jwt.accessSecret;
        if (!secret) {
            return res.status(500).json({
                status: false,
                message: "JWT secret is not configured",
                data: [],
            });
        }
        const decoded = jwt.verify(token, secret);
        if (!decoded.userId) {
            return res.status(401).json({ status: false, message: "Unauthorized", data: [] });
        }
        const user = await prisma.user.findUnique({
            where: { id: decoded.userId },
            select: { id: true, role: true, isActive: true },
        });
        if (!user || !user.isActive) {
            return res.status(401).json({ status: false, message: "Unauthorized", data: [] });
        }
        // Never trust an old token's role after a role change in the database.
        req.user = { ...decoded, userId: user.id, role: user.role };
        next();
    }
    catch (error) {
        logger.error(error);
        return res.status(401).json({
            status: false,
            message: "Unauthorized",
            data: [],
        });
    }
};
export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(401).json({
                status: false,
                message: "Unauthorized",
                data: [],
            });
        }
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                status: false,
                message: `Role ${req.user.role} is not authorized to access this route`,
            });
        }
        next();
    };
};
//# sourceMappingURL=protected.middleware.js.map