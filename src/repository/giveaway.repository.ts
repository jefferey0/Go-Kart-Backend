import prisma from "../lib/prisma.ts";
import { Prisma } from "../../generated/prisma/client.ts";



export const giveawayRepository = {

  async createGiveaway(data: any) {
      return await prisma.giveaway.create({
      data,
      include: {
        category: true,
        prize: {
          include: { images: true },
        }
      },
    });
  },


  async findGiveawayById(id: string){
    return await prisma.giveaway.findUnique({
      where: { id },
      include: {
        category: true,
        prize: {
          include: { images: true },
        }
      },
    });
  },


  async findGiveawayBySlug(slug: string) {
    return await prisma.giveaway.findUnique({
      where: { slug },
      include: {
        category: true,
        prize: {
          include: { images: true },
        }
      },
    });
  },

  async findWinnerByGiveawayId(giveawayId: string) {
    return prisma.winner.findMany({
      where: { giveawayId },
      orderBy: { selectedAt: "asc" },
      select: {
        id: true,
        giveawayId: true,
        status: true,
        selectedAt: true,
        user: { select: { id: true, firstName: true, lastName: true } },
        ticket: { select: { id: true, ticketNumber: true, status: true } },
        draw: {
          select: {
            id: true,
            algorithm: true,
            totalEligibleTickets: true,
            verificationHash: true,
            completedAt: true,
          },
        },
        claim: { select: { id: true, status: true, claimedAt: true, deliveredAt: true, confirmedAt: true } },
      },
    });
  },

  async findAllGiveaways(filters: Prisma.GiveawayWhereInput = {}) {
    return await prisma.giveaway.findMany({
      where: filters ? filters : {},
      include: {
        category: true,
        prize: {
          include: { images: true },
        }
      },
      orderBy: { createdAt: 'desc' },
    });
  },


  async updateGiveaway(id: string, data: Prisma.GiveawayUpdateInput) {
    return await prisma.giveaway.update({
      where: { id },
      data,
      include: {
        category: true,
        prize: true,
      },
    });
  },

  async deleteGiveaway(id: string) {
    return await prisma.giveaway.delete({
      where: { id },
    });
  },

}
