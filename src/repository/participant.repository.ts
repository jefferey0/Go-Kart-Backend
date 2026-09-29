import prisma from "../lib/prisma.ts";

export const participantRepository = {

      async getAll(
            giveawayId: string,
            search?: string
      ) {

            const orders = await prisma.order.findMany({
                  where: {
                        giveawayId,

                        status: "CONFIRMED",

                        ...(search
                              ? {
                                    user: {
                                          OR: [
                                                {
                                                      firstName: {
                                                            contains: search,
                                                            mode: "insensitive",
                                                      },
                                                },
                                                {
                                                      lastName: {
                                                            contains: search,
                                                            mode: "insensitive",
                                                      },
                                                },
                                                {
                                                      email: {
                                                            contains: search,
                                                            mode: "insensitive",
                                                      },
                                                },
                                          ],
                                    },
                              }
                              : {}),
                  },

                  select: {
                        userId: true,
                        quantity: true,
                        totalAmount: true,
                        createdAt: true,

                        user: {
                              select: {
                                    id: true,
                                    firstName: true,
                                    lastName: true,
                                    email: true,
                              },
                        },
                  },

                  orderBy: {
                        createdAt: "asc",
                  },
            });

            const participants = new Map<
                  string,
                  {
                        user: {
                              id: string;
                              firstName: string;
                              lastName: string;
                              email: string;
                        };
                        entries: number;
                        amountSpent: number;
                        joinedAt: Date;
                  }
            >();

            for (const order of orders) {

                  const existing = participants.get(order.userId);

                  if (!existing) {

                        participants.set(order.userId, {
                              user: order.user,
                              entries: order.quantity,
                              amountSpent: Number(order.totalAmount),
                              joinedAt: order.createdAt,
                        });

                        continue;
                  }

                  existing.entries += order.quantity;

                  existing.amountSpent += Number(order.totalAmount);

                  if (order.createdAt < existing.joinedAt) {
                        existing.joinedAt = order.createdAt;
                  }
            }

            return Array.from(participants.values());
      },


      async getByUserId(
            giveawayId: string,
            userId: string
      ) {

            const orders = await prisma.order.findMany({
                  where: {
                        giveawayId,
                        userId,
                        status: "CONFIRMED",
                  },

                  select: {
                        quantity: true,
                        totalAmount: true,
                        createdAt: true,

                        user: {
                              select: {
                                    id: true,
                                    firstName: true,
                                    lastName: true,
                                    email: true,
                              },
                        },
                  },

                  orderBy: {
                        createdAt: "asc",
                  },
            });

            const firstOrder = orders[0];
            if (!firstOrder) {
                  return null;
            }

            let entries = 0;
            let amountSpent = 0;
            let joinedAt = firstOrder.createdAt;

            for (const order of orders) {

                  entries += order.quantity;

                  amountSpent += Number(order.totalAmount);

                  if (order.createdAt < joinedAt) {
                        joinedAt = order.createdAt;
                  }
            }

            return {
                  user: firstOrder.user,
                  entries,
                  amountSpent,
                  joinedAt,
            };
      },
};