export declare const claimService: {
    getMyWins(userId: string): Promise<{
        giveaway: {
            id: string;
            title: string;
            slug: string;
            endDate: Date;
            image: string | null;
            prize: {
                name: string;
            } | null;
        };
        id: string;
        giveawayId: string;
        ticket: {
            ticketNumber: string;
        };
        claim: {
            status: import("../../generated/prisma/enums.ts").PrizeClaimStatus;
        } | null;
    }[]>;
    getPublicWinners(): Promise<{
        displayName: string;
        selectedAt: Date;
        giveaway: {
            title: string;
            slug: string;
            prize: {
                name: string;
            } | null;
        };
    }[]>;
    getMyWin(userId: string, id: string): Promise<{
        giveaway: {
            prize: ({
                images: {
                    id: string;
                    createdAt: Date;
                    sortOrder: number;
                    prizeId: string;
                    url: string;
                }[];
            } & {
                id: string;
                createdAt: Date;
                updatedAt: Date;
                giveawayId: string;
                description: string;
                currency: string | null;
                name: string;
                estimatedValue: import("@prisma/client-runtime-utils").Decimal;
                condition: string | null;
            }) | null;
        } & {
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
        ticket: {
            id: string;
            createdAt: Date;
            userId: string;
            status: import("../../generated/prisma/enums.ts").TicketStatus;
            giveawayId: string;
            ticketNumber: string;
            orderId: string;
        };
        claim: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("../../generated/prisma/enums.ts").PrizeClaimStatus;
            winnerId: string;
            claimedAt: Date | null;
            deliveredAt: Date | null;
            confirmedAt: Date | null;
            notes: string | null;
        } | null;
    } & {
        id: string;
        userId: string;
        status: import("../../generated/prisma/enums.ts").WinnerStatus;
        giveawayId: string;
        selectedAt: Date;
        ticketId: string;
        drawId: string;
    }>;
    claim(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.ts").PrizeClaimStatus;
        winnerId: string;
        claimedAt: Date | null;
        deliveredAt: Date | null;
        confirmedAt: Date | null;
        notes: string | null;
    }>;
    confirmDelivery(userId: string, id: string): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("../../generated/prisma/enums.ts").PrizeClaimStatus;
        winnerId: string;
        claimedAt: Date | null;
        deliveredAt: Date | null;
        confirmedAt: Date | null;
        notes: string | null;
    }>;
};
//# sourceMappingURL=claim.service.d.ts.map