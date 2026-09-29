import { getPagination } from "../utils/pagination.js";
import { Prisma } from "../../generated/prisma/client.js";
import { AppError } from "../utils/Response/http-error.js";
import { adminRepository } from "../repository/admin.repository.js";
export const adminService = {
    async dashboard() {
        const metrics = await adminRepository.getDashboardMetrics();
        const revenueByCurrency = metrics.revenueByCurrency.map((row) => ({
            currency: row.currency,
            amount: row._sum.amount?.toString() ?? "0",
        }));
        const singleCurrencyRevenue = revenueByCurrency.length === 1 ? revenueByCurrency[0] : undefined;
        return {
            totalGiveaways: metrics.totalGiveaways,
            activeGiveaways: metrics.activeGiveaways,
            totalUsers: metrics.totalUsers,
            totalEntries: metrics.totalEntries,
            totalRevenue: singleCurrencyRevenue?.amount ?? (revenueByCurrency.length === 0 ? "0" : null),
            totalRevenueCurrency: singleCurrencyRevenue?.currency ?? null,
            revenueByCurrency,
            pendingWinners: metrics.pendingWinners,
        };
    },
    async users(query) {
        const { page, limit, skip } = getPagination(query.page, query.limit);
        const search = typeof query.search === "string" ? query.search.trim() : "";
        const where = search ? {
            OR: [
                { email: { contains: search, mode: "insensitive" } },
                { firstName: { contains: search, mode: "insensitive" } },
                { lastName: { contains: search, mode: "insensitive" } },
            ]
        } : {};
        const [data, total] = await adminRepository.findUsers(where, skip, limit);
        return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
    },
    async orders(query) {
        const { page, limit, skip } = getPagination(query.page, query.limit);
        const orderStatuses = ["PENDING", "CONFIRMED", "FAILED", "REFUNDED", "CANCELED"];
        const status = typeof query.status === "string" ? query.status.toUpperCase() : undefined;
        if (status && !orderStatuses.includes(status)) {
            throw new AppError(400, "Invalid order status filter", "INVALID_ORDER_STATUS");
        }
        const search = typeof query.search === "string" ? query.search.trim() : "";
        const giveawayId = typeof query.giveawayId === "string" ? query.giveawayId : undefined;
        const where = {
            ...(status ? { status: status } : {}),
            ...(giveawayId ? { giveawayId } : {}),
            ...(search
                ? {
                    OR: [
                        { orderNumber: { contains: search, mode: "insensitive" } },
                        { user: { email: { contains: search, mode: "insensitive" } } },
                        { giveaway: { title: { contains: search, mode: "insensitive" } } },
                    ],
                }
                : {}),
        };
        const [data, total] = await adminRepository.findOrders(where, skip, limit);
        return { data, pagination: { page, limit, total, totalPages: Math.ceil(total / limit) } };
    },
    async updateUserStatus(id, isActive) {
        return adminRepository.updateUserStatus(id, isActive);
    },
    async deleteUser(id) {
        return adminRepository.deleteUser(id);
    }
};
//# sourceMappingURL=admin.service.js.map