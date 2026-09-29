import type { PaymentMethodProvider, PaymentMethodType } from "../../generated/prisma/enums.ts";
type PaymentMethodInput = {
    type: PaymentMethodType;
    provider: PaymentMethodProvider;
    name: string;
    details: string;
    network?: string | null;
    sortOrder?: number;
    isActive?: boolean;
};
export declare const paymentService: {
    listMethods(type?: string): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: PaymentMethodType;
        name: string;
        provider: PaymentMethodProvider;
        details: string;
        network: string | null;
        sortOrder: number;
    }[]>;
    listAllMethods(): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: PaymentMethodType;
        name: string;
        provider: PaymentMethodProvider;
        details: string;
        network: string | null;
        sortOrder: number;
    }[]>;
    createMethod(data: PaymentMethodInput): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: PaymentMethodType;
        name: string;
        provider: PaymentMethodProvider;
        details: string;
        network: string | null;
        sortOrder: number;
    }>;
    updateMethod(id: string, data: Partial<PaymentMethodInput>): Promise<{
        id: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: PaymentMethodType;
        name: string;
        provider: PaymentMethodProvider;
        details: string;
        network: string | null;
        sortOrder: number;
    }>;
    createOrder(data: {
        giveawayId: string;
        quantity: number;
        idempotencyKey?: string;
        paymentMethodId: string;
    }, userId: string): Promise<{
        payment: {
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
                type: PaymentMethodType;
                name: string;
                provider: PaymentMethodProvider;
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
        };
        paymentInstructions: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            type: PaymentMethodType;
            name: string;
            provider: PaymentMethodProvider;
            details: string;
            network: string | null;
            sortOrder: number;
        } | null;
        order: {
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
    }>;
    initializeForOrder(orderId: string, userId: string, paymentMethodId: string): Promise<{
        payment: {
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
                type: PaymentMethodType;
                name: string;
                provider: PaymentMethodProvider;
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
        };
        paymentInstructions: {
            id: string;
            isActive: boolean;
            createdAt: Date;
            updatedAt: Date;
            type: PaymentMethodType;
            name: string;
            provider: PaymentMethodProvider;
            details: string;
            network: string | null;
            sortOrder: number;
        } | null;
    }>;
    submitProof(paymentId: string, userId: string, file?: Express.Multer.File): Promise<{
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
            type: PaymentMethodType;
            name: string;
            provider: PaymentMethodProvider;
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
    getPaymentStatus(providerTransactionId: string, userId: string): Promise<{
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
            type: PaymentMethodType;
            name: string;
            provider: PaymentMethodProvider;
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
            type: PaymentMethodType;
            name: string;
            provider: PaymentMethodProvider;
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
    reviewPayment(paymentId: string, status: string): Promise<{
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
            type: PaymentMethodType;
            name: string;
            provider: PaymentMethodProvider;
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
    validateMethod(data: PaymentMethodInput): void;
};
export {};
//# sourceMappingURL=payment.service.d.ts.map