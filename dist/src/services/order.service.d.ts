import type { OrderStatus } from "../../generated/prisma/enums.ts";
interface CreateOrderData {
    giveawayId: string;
    quantity: number;
    idempotencyKey?: string;
}
export declare const orderService: {
    create(data: CreateOrderData, userId: string): Promise<{
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
    }>;
    getAll(): Promise<({
        tickets: {
            id: string;
            createdAt: Date;
            userId: string;
            status: import("../../generated/prisma/enums.ts").TicketStatus;
            giveawayId: string;
            ticketNumber: string;
            orderId: string;
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
            entryPrice: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
        };
        payment: {
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
        } | null;
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
    })[]>;
    getById(id: string): Promise<{
        tickets: {
            id: string;
            createdAt: Date;
            userId: string;
            status: import("../../generated/prisma/enums.ts").TicketStatus;
            giveawayId: string;
            ticketNumber: string;
            orderId: string;
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
            entryPrice: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
        };
        payment: {
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
        } | null;
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
    }>;
    getByOrderNumber(orderNumber: string): Promise<{
        tickets: {
            id: string;
            createdAt: Date;
            userId: string;
            status: import("../../generated/prisma/enums.ts").TicketStatus;
            giveawayId: string;
            ticketNumber: string;
            orderId: string;
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
            entryPrice: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
        };
        payment: {
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
        } | null;
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
    }>;
    getMyOrders(userId: string): Promise<({
        tickets: {
            id: string;
            createdAt: Date;
            userId: string;
            status: import("../../generated/prisma/enums.ts").TicketStatus;
            giveawayId: string;
            ticketNumber: string;
            orderId: string;
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
            entryPrice: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
        };
        payment: {
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
        } | null;
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
    })[]>;
    updateStatus(id: string, status: OrderStatus): Promise<{
        tickets: {
            id: string;
            createdAt: Date;
            userId: string;
            status: import("../../generated/prisma/enums.ts").TicketStatus;
            giveawayId: string;
            ticketNumber: string;
            orderId: string;
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
            entryPrice: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
        };
        payment: {
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
        } | null;
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
    }>;
    delete(id: string, userId?: string, isAdmin?: boolean): Promise<{
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
    }>;
};
export {};
//# sourceMappingURL=order.service.d.ts.map