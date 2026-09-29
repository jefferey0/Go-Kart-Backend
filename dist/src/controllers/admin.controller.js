import { adminService } from "../services/admin.service.js";
import prisma from "../lib/prisma.js";
import { getPagination } from "../utils/pagination.js";
import { sendSuccess } from "../utils/Response/api-response.js";
import { platformSettingsService } from "../services/platformSettings.service.js";
import { drawService } from "../services/draw.service.js";
import { giveawayService } from "../services/giveaway.service.js";
import { AppError } from "../utils/Response/http-error.js";
export async function dashboard(_req, res) {
    return sendSuccess(res, "Dashboard retrieved successfully", await adminService.dashboard());
}
export async function getSettings(_req, res) {
    return sendSuccess(res, "Settings retrieved successfully", await platformSettingsService.get());
}
export async function updateSettings(req, res) {
    const adminId = req.user?.userId;
    if (!adminId) {
        return res.status(401).json({ success: false, message: "Authentication required" });
    }
    return sendSuccess(res, "Settings updated successfully", await platformSettingsService.update(req.body, adminId));
}
export async function users(req, res) {
    const r = await adminService.users(req.query);
    return sendSuccess(res, "Users retrieved successfully", r.data, 200, r.pagination);
}
export async function orders(req, res) {
    const result = await adminService.orders(req.query);
    return sendSuccess(res, "Orders retrieved successfully", result.data, 200, result.pagination);
}
export async function selectWinners(req, res) {
    const actorId = req.user?.userId;
    const ticketIds = req.body?.ticketIds;
    if (!actorId)
        throw new AppError(401, "Authentication required", "UNAUTHORIZED");
    if (!Array.isArray(ticketIds) || ticketIds.length === 0) {
        throw new AppError(400, "At least one ticket ID is required", "TICKET_IDS_REQUIRED");
    }
    if (ticketIds.length > 1000) {
        throw new AppError(400, "A maximum of 1000 winners can be selected in one request", "TOO_MANY_WINNERS");
    }
    if (ticketIds.some((ticketId) => typeof ticketId !== "string" || !ticketId.trim())) {
        throw new AppError(400, "All ticket IDs must be non-empty strings", "INVALID_TICKET_IDS");
    }
    if (new Set(ticketIds.map((ticketId) => ticketId.trim())).size !== ticketIds.length) {
        throw new AppError(400, "Duplicate ticket IDs are not allowed", "DUPLICATE_TICKET_IDS");
    }
    const result = await drawService.selectWinners(req.params.giveawayId, ticketIds, actorId);
    return sendSuccess(res, "Winners selected successfully", result, 201);
}
// Backward-compatible endpoint for older frontend clients.
export async function selectWinner(req, res) {
    const actorId = req.user?.userId;
    const ticketId = req.body?.ticketId;
    if (!actorId)
        throw new AppError(401, "Authentication required", "UNAUTHORIZED");
    if (typeof ticketId !== "string" || !ticketId.trim()) {
        throw new AppError(400, "Ticket ID is required", "TICKET_ID_REQUIRED");
    }
    return sendSuccess(res, "Winner selected successfully", await drawService.selectWinner(req.params.giveawayId, ticketId, actorId), 201);
}
export async function updateGiveawayStatus(req, res) {
    const status = req.body?.status;
    if (typeof status !== "string" || !status.trim()) {
        throw new AppError(400, "Giveaway status is required", "STATUS_REQUIRED");
    }
    return sendSuccess(res, `Giveaway status changed to ${status}`, await giveawayService.updateStatus(req.params.giveawayId, status));
}
export async function adminUpdateGiveaway(req, res) {
    return sendSuccess(res, "Giveaway updated successfully", await giveawayService.updateGiveawayService(req.params.giveawayId, req.body));
}
export async function adminDeleteGiveaway(req, res) {
    return sendSuccess(res, "Giveaway deleted successfully", await giveawayService.deleteGiveawayService(req.params.giveawayId));
}
export async function updateUserStatus(req, res) {
    return sendSuccess(res, "User status updated successfully", await adminService.updateUserStatus(req.params.id, req.body.isActive));
}
export async function participants(req, res) {
    const { page, limit, skip } = getPagination(req.query.page, req.query.limit);
    const where = {
        giveawayId: req.params.id,
        ...(req.query.search
            ? {
                user: {
                    OR: [
                        { email: { contains: req.query.search, mode: "insensitive" } },
                        {
                            firstName: { contains: req.query.search, mode: "insensitive" },
                        },
                        { lastName: { contains: req.query.search, mode: "insensitive" } },
                    ],
                },
            }
            : {}),
    };
    const [data, total] = await prisma.$transaction(async (tx) => {
        const [participants, uniqueUsers] = await Promise.all([
            tx.ticket.findMany({
                where,
                skip,
                take: limit,
                distinct: ["userId"],
                include: {
                    user: {
                        select: { id: true, firstName: true, lastName: true, email: true },
                    },
                },
            }),
            tx.ticket.findMany({ where, distinct: ["userId"], select: { userId: true } }),
        ]);
        return [participants, uniqueUsers.length];
    });
    return sendSuccess(res, "Participants retrieved successfully", data, 200, {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
    });
}
export async function tickets(req, res) {
    const { page, limit, skip } = getPagination(req.query.page, req.query.limit);
    const where = { giveawayId: req.params.id };
    const [data, total] = await prisma.$transaction([
        prisma.ticket.findMany({
            where,
            skip,
            take: limit,
            orderBy: { createdAt: "desc" },
            include: {
                user: {
                    select: { id: true, firstName: true, lastName: true, email: true },
                },
            },
        }),
        prisma.ticket.count({ where }),
    ]);
    return sendSuccess(res, "Tickets retrieved successfully", data, 200, {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
    });
}
//# sourceMappingURL=admin.controller.js.map