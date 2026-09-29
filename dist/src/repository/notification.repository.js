import prisma from "../lib/prisma.js";
import { Prisma } from "../../generated/prisma/client.js";
export const notificationRepository = {
    async list(userId, skip, take, giveawayId) {
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
//# sourceMappingURL=notification.repository.js.map