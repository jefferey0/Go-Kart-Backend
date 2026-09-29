import type { Request, Response } from "express";
import prisma from "../lib/prisma.ts";
import { getPagination } from "../utils/pagination.ts";
import { sendSuccess } from "../utils/Response/api-response.ts";




export async function list(req: Request, res: Response) {
  const { page, limit, skip } = getPagination(req.query.page, req.query.limit);
  const where: any = {
    userId: req.user!.id,
    ...(req.query.giveawayId ? { giveawayId: req.query.giveawayId } : {}),
  };
  const [data, total] = await prisma.$transaction([
    prisma.ticket.findMany({
      where,
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
      include: { giveaway: true, order: true },
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
export async function get(req: Request, res: Response) {
  const ticket = await prisma.ticket.findFirst({
    where: { id: req.params.id, userId: req.user!.id } as any,
    include: { giveaway: true, order: true },
  });
  return sendSuccess(res, "Ticket retrieved successfully", ticket);
}
