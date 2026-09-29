import prisma from "../lib/prisma.ts";
import { Prisma } from "../../generated/prisma/client.ts";

const orderInclude = {
  user: {
    select: {
      id: true,
      firstName: true,
      lastName: true,
      email: true,
    },
  },

  giveaway: {
    select: {
      id: true,
      title: true,
      slug: true,
      entryPrice: true,
      currency: true,
    },
  },

  payment: true,

  tickets: true,
};

export const orderRepository = {
  async createOrder(data: Prisma.OrderCreateInput) {
    return await prisma.order.create({
      data,
      include: orderInclude,
    });
  },

  async getAll() {
    return await prisma.order.findMany({
      include: orderInclude,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async getById(id: string) {
    return await prisma.order.findUnique({
      where: {
        id,
      },
      include: orderInclude,
    });
  },

  async getByOrderNumber(orderNumber: string) {
    return await prisma.order.findUnique({
      where: {
        orderNumber,
      },
      include: orderInclude,
    });
  },

  async getByUserId(userId: string) {
    return await prisma.order.findMany({
      where: {
        userId,
      },
      include: orderInclude,
      orderBy: {
        createdAt: "desc",
      },
    });
  },

  async updateStatus(id: string, status: Prisma.OrderUpdateInput["status"]) {
    return await prisma.order.update({
      where: {
        id,
      },
      data: {
        status,
      } as any,
      include: orderInclude,
    });
  },

  async deleteOrder(id: string) {
    return await prisma.order.delete({
      where: {
        id,
      },
    });
  },
};
