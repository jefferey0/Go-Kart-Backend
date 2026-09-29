export declare const ticketRepository: {
    countByUserAndGiveaway(userId: string, giveawayId: string): Promise<number>;
    listByUser(userId: string, skip: number, take: number, giveawayId?: string): Promise<({
        giveaway: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../generated/prisma/enums.ts").GiveawayStatus;
            title: string;
            slug: string;
            shortDescription: string;
            description: string;
            entryPrice: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
            maximumEntries: number;
            entriesSold: number;
            maximumEntriesPerUser: number;
            minimumEntriesPerPurchase: number;
            startDate: Date;
            endDate: Date;
            featured: boolean;
            categoryId: string | null;
            createdBy: string;
        };
    } & {
        id: string;
        createdAt: Date;
        userId: string;
        status: import("../../generated/prisma/enums.ts").TicketStatus;
        giveawayId: string;
        ticketNumber: string;
        orderId: string;
    })[]>;
    countByUser(userId: string, giveawayId?: string): Promise<number>;
    create(data: any): Promise<{
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
    }>;
};
//# sourceMappingURL=ticket.repository.d.ts.map