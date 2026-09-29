import type { OrderStatus } from "../../generated/prisma/enums.ts";
export declare const adminService: {
    dashboard(): Promise<{
        totalGiveaways: number;
        activeGiveaways: number;
        totalUsers: number;
        totalEntries: number;
        totalRevenue: string | null;
        totalRevenueCurrency: string | null;
        revenueByCurrency: {
            currency: string;
            amount: string;
        }[];
        pendingWinners: number;
    }>;
    users(query: any): Promise<{
        data: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
            phone: string | null;
            role: import("../../generated/prisma/enums.ts").UserRole;
            isEmailVerified: boolean;
            isActive: boolean;
            createdAt: Date;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    orders(query: any): Promise<{
        data: ({
            tickets: {
                id: string;
                createdAt: Date;
                status: import("../../generated/prisma/enums.ts").TicketStatus;
                ticketNumber: string;
            }[];
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                slug: string;
                currency: string;
            };
            payment: ({
                paymentMethod: {
                    id: string;
                    isActive: boolean;
                    createdAt: Date;
                    updatedAt: Date;
                    type: import("../../generated/prisma/enums.ts").PaymentMethodType;
                    name: string;
                    provider: import("../../generated/prisma/enums.ts").PaymentMethodProvider;
                    details: string;
                    network: string | null;
                    sortOrder: number;
                } | null;
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                status: import("../../generated/prisma/enums.ts").PaymentStatus;
                orderId: string;
                metadata: import("@prisma/client/runtime/client").JsonValue | null;
                currency: string;
                paymentMethodId: string | null;
                provider: string;
                providerTransactionId: string;
                amount: import("@prisma/client-runtime-utils").Decimal;
                proofImageUrl: string | null;
            }) | null;
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        })[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    updateUserStatus(id: string, isActive: boolean): Promise<{
        id: string;
        email: string;
        isActive: boolean;
    }>;
    deleteUser(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string | null;
        passwordHash: string;
        role: import("../../generated/prisma/enums.ts").UserRole;
        isEmailVerified: boolean;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
};
//# sourceMappingURL=admin.service.d.ts.map