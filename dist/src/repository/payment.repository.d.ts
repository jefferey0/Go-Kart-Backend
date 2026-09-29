import type { Prisma } from "../../generated/prisma/client.ts";
export declare const paymentRepository: {
    listActiveMethods(type?: "CRYPTO" | "PAYMENT_APP"): Promise<{
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
    }[]>;
    findActiveMethod(id: string): Promise<{
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
    } | null>;
    listMethods(): Promise<{
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
    }[]>;
    createMethod(data: Prisma.PaymentMethodCreateInput): Promise<{
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
    }>;
    updateMethod(id: string, data: Prisma.PaymentMethodUpdateInput): Promise<{
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
    }>;
    create(data: Prisma.PaymentUncheckedCreateInput): Promise<{
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    }>;
    findByOrderId(orderId: string): Promise<({
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    }) | null>;
    findByProviderTransactionId(providerTransactionId: string): Promise<({
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    }) | null>;
    findById(id: string): Promise<({
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    }) | null>;
    listReviewQueue(): Promise<({
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    })[]>;
    submitProof(id: string, proofImageUrl: string): Promise<{
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    }>;
    confirm(id: string): Promise<({
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    }) | null>;
    reject(id: string): Promise<({
        order: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            giveaway: {
                id: string;
                title: string;
                currency: string;
            };
        } & {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            userId: string;
            orderNumber: string;
            quantity: number;
            unitPrice: import("@prisma/client-runtime-utils").Decimal;
            totalAmount: import("@prisma/client-runtime-utils").Decimal;
            status: import("../../generated/prisma/enums.ts").OrderStatus;
            idempotencyKey: string | null;
            giveawayId: string;
        };
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
    }) | null>;
};
//# sourceMappingURL=payment.repository.d.ts.map