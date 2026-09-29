import prisma from "../lib/prisma.ts";
import { Prisma } from "../../generated/prisma/client.ts";

export const ticketRepository = {
  async countByUserAndGiveaway(userId: string, giveawayId: string) {
    return prisma.ticket.count({
      where: {
        userId,
        giveawayId,
        status: { not: "INVALIDATED" },
      },
    });
  },

  async listByUser(userId: string, skip: number, take: number, giveawayId?: string) {
    return prisma.ticket.findMany({
      where: {
        userId,
        ...(giveawayId ? { giveawayId } : {}),
      },
      skip,
      take,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        giveaway: true,
      },
    });
  },

  async countByUser(userId: string, giveawayId?: string) {
    return prisma.ticket.count({
      where: {
        userId,
        ...(giveawayId ? { giveawayId } : {}),
      },
    });
  },

  async create(data: any) {
    return await prisma.order.create({
      data,
      include: {
        user: { select: { id: true, firstName: true, lastName: true, email: true } },
        giveaway: { select: { id: true, title: true, slug: true } },
        tickets: true,
      },
    });
  },
};
