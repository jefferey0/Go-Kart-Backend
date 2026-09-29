import prisma from "../lib/prisma.js";
export const adminRepository = {
    async getDashboardMetrics() {
        const [totalUsers, totalGiveaways, activeGiveaways, totalEntries, revenueByCurrency, pendingWinners] = await Promise.all([
            prisma.user.count(),
            prisma.giveaway.count(),
            prisma.giveaway.count({ where: { status: "ACTIVE" } }),
            prisma.ticket.count({ where: { status: { not: "INVALIDATED" } } }),
            prisma.payment.groupBy({
                by: ["currency"],
                where: { status: "SUCCESS" },
                _sum: { amount: true },
            }),
            prisma.prizeClaim.count({ where: { status: "PENDING" } }),
        ]);
        return { totalUsers, totalGiveaways, activeGiveaways, totalEntries, revenueByCurrency, pendingWinners };
    },
    async findUsers(where, skip, take) {
        return prisma.$transaction([
            prisma.user.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: "desc" },
                select: {
                    id: true,
                    firstName: true,
                    lastName: true,
                    email: true,
                    phone: true,
                    role: true,
                    isEmailVerified: true,
                    isActive: true,
                    createdAt: true,
                },
            }),
            prisma.user.count({ where }),
        ]);
    },
    async findOrders(where, skip, take) {
        return prisma.$transaction([
            prisma.order.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: "desc" },
                include: {
                    user: { select: { id: true, firstName: true, lastName: true, email: true } },
                    giveaway: { select: { id: true, title: true, slug: true, currency: true } },
                    payment: { include: { paymentMethod: true } },
                    tickets: { select: { id: true, ticketNumber: true, status: true, createdAt: true } },
                },
            }),
            prisma.order.count({ where }),
        ]);
    },
    async updateUserStatus(id, isActive) {
        return prisma.user.update({
            where: { id },
            data: { isActive },
            select: { id: true, email: true, isActive: true },
        });
    },
    async deleteUser(id) {
        return prisma.user.delete({ where: { id } });
    },
};
//# sourceMappingURL=admin.repository.js.map