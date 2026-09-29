import type { Request, Response } from "express";
import { adminService } from "../services/admin.service.ts";
import prisma from "../lib/prisma.ts";
import { getPagination } from "../utils/pagination.ts";
import { sendSuccess } from "../utils/Response/api-response.ts";
import { platformSettingsService } from "../services/platformSettings.service.ts";
import { drawService } from "../services/draw.service.ts";
import { giveawayService } from "../services/giveaway.service.ts";
import { AppError } from "../utils/Response/http-error.ts";











export async function dashboard(_req: Request, res: Response) {
  return sendSuccess(
    res,
    "Dashboard retrieved successfully",
    await adminService.dashboard(),
  );
}

export async function getSettings(_req: Request, res: Response) {
  return sendSuccess(
    res,
    "Settings retrieved successfully",
    await platformSettingsService.get(),
  );
}

export async function updateSettings(req: Request, res: Response) {
  const adminId = req.user?.userId;
  if (!adminId) {
    return res.status(401).json({ success: false, message: "Authentication required" });
  }
  return sendSuccess(
    res,
    "Settings updated successfully",
    await platformSettingsService.update(req.body, adminId),
  );
}

export async function users(req: Request, res: Response) {
  const r = await adminService.users(req.query);
  return sendSuccess(
    res,
    "Users retrieved successfully",
    r.data,
    200,
    r.pagination,
  );
}

export async function orders(req: Request, res: Response) {
  const result = await adminService.orders(req.query);
  return sendSuccess(
    res,
    "Orders retrieved successfully",
    result.data,
    200,
    result.pagination,
  );
}

export async function selectWinners(req: Request, res: Response) {
  const actorId = req.user?.userId;
  const ticketIds = req.body?.ticketIds;

  if (!actorId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
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

  const result = await drawService.selectWinners(
    req.params.giveawayId as string,
    ticketIds,
    actorId,
  );

  return sendSuccess(res, "Winners selected successfully", result, 201);
}

// Backward-compatible endpoint for older frontend clients.
export async function selectWinner(req: Request, res: Response) {
  const actorId = req.user?.userId;
  const ticketId = req.body?.ticketId;
  if (!actorId) throw new AppError(401, "Authentication required", "UNAUTHORIZED");
  if (typeof ticketId !== "string" || !ticketId.trim()) {
    throw new AppError(400, "Ticket ID is required", "TICKET_ID_REQUIRED");
  }

  return sendSuccess(
    res,
    "Winner selected successfully",
    await drawService.selectWinner(req.params.giveawayId as string, ticketId, actorId),
    201,
  );
}

export async function updateGiveawayStatus(req: Request, res: Response) {
  const status = req.body?.status;
  if (typeof status !== "string" || !status.trim()) {
    throw new AppError(400, "Giveaway status is required", "STATUS_REQUIRED");
  }

  return sendSuccess(
    res,
    `Giveaway status changed to ${status}`,
    await giveawayService.updateStatus(req.params.giveawayId as string, status),
  );
}

export async function adminUpdateGiveaway(req: Request, res: Response) {
  return sendSuccess(
    res,
    "Giveaway updated successfully",
    await giveawayService.updateGiveawayService(req.params.giveawayId as string, req.body),
  );
}

export async function adminDeleteGiveaway(req: Request, res: Response) {
  return sendSuccess(
    res,
    "Giveaway deleted successfully",
    await giveawayService.deleteGiveawayService(req.params.giveawayId as string),
  );
}

export async function updateUserStatus(req: Request, res: Response) {
  return sendSuccess(
    res,
    "User status updated successfully",
    await adminService.updateUserStatus(req.params.id as string, req.body.isActive),
  );
}
export async function participants(req: Request, res: Response) {
  const { page, limit, skip } = getPagination(req.query.page, req.query.limit);
  const where: any = {
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
    return [participants, uniqueUsers.length] as const;
  });
  return sendSuccess(res, "Participants retrieved successfully", data, 200, {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  });
}
export async function tickets(req: Request, res: Response) {
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
    } as any),
    prisma.ticket.count({ where } as any),
  ]);
  return sendSuccess(res, "Tickets retrieved successfully", data, 200, {
    page,
    limit,
    total,
    totalPages: Math.ceil(total / limit),
  });
}
