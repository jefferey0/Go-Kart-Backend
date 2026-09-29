import prisma from "../lib/prisma.ts";
import { Prisma } from "../../generated/prisma/client.ts";

export const notificationRepository = {
  async list(userId: string, skip: number, take: number, giveawayId?: string) {
    const where = {
      userId,
      ...(giveawayId ? { giveawayId } : {}),
    };
    const [data, total] = await prisma.$transaction([
      prisma.notification.findMany({
        where,
        skip,
        take,
        orderBy: {
          createdAt: "desc",
        },
      }),
      prisma.notification.count({ where }),
    ]);
    return { data, total };
  },
};
