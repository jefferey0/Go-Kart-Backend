export declare const drawService: {
    selectWinners(giveawayId: string, ticketIds: string[], actorId: string): Promise<{
        winners: {
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
            };
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
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
            ticket: {
                id: string;
                createdAt: Date;
                userId: string;
                status: import("../../generated/prisma/enums.ts").TicketStatus;
                giveawayId: string;
                ticketNumber: string;
                orderId: string;
            };
            id: string;
            userId: string;
            status: import("../../generated/prisma/enums.ts").WinnerStatus;
            giveawayId: string;
            selectedAt: Date;
            ticketId: string;
            drawId: string;
        }[];
        draws: {
            id: string;
            status: import("../../generated/prisma/enums.ts").DrawStatus;
            giveawayId: string;
            totalEligibleTickets: number;
            winningTicketId: string | null;
            algorithm: string;
            startedAt: Date;
            completedAt: Date | null;
            verificationHash: string | null;
        }[];
        winnerCount: number;
    }>;
    selectWinner(giveawayId: string, ticketId: string, actorId: string): Promise<{
        winners: {
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
            };
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
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
            ticket: {
                id: string;
                createdAt: Date;
                userId: string;
                status: import("../../generated/prisma/enums.ts").TicketStatus;
                giveawayId: string;
                ticketNumber: string;
                orderId: string;
            };
            id: string;
            userId: string;
            status: import("../../generated/prisma/enums.ts").WinnerStatus;
            giveawayId: string;
            selectedAt: Date;
            ticketId: string;
            drawId: string;
        }[];
        draws: {
            id: string;
            status: import("../../generated/prisma/enums.ts").DrawStatus;
            giveawayId: string;
            totalEligibleTickets: number;
            winningTicketId: string | null;
            algorithm: string;
            startedAt: Date;
            completedAt: Date | null;
            verificationHash: string | null;
        }[];
        winnerCount: number;
    }>;
    draw(_giveawayId: string, _actorId: string): Promise<never>;
};
//# sourceMappingURL=draw.service.d.ts.map