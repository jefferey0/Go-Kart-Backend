import { Prisma } from "../../generated/prisma/client.ts";
export declare const giveawayRepository: {
    createGiveaway(data: any): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            name: string;
        } | null;
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
    }>;
    findGiveawayById(id: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            name: string;
        } | null;
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
    }) | null>;
    findGiveawayBySlug(slug: string): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            name: string;
        } | null;
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
    }) | null>;
    findWinnerByGiveawayId(giveawayId: string): Promise<{
        id: string;
        user: {
            id: string;
            firstName: string;
            lastName: string;
        };
        status: import("../../generated/prisma/enums.ts").WinnerStatus;
        giveawayId: string;
        selectedAt: Date;
        ticket: {
            id: string;
            status: import("../../generated/prisma/enums.ts").TicketStatus;
            ticketNumber: string;
        };
        draw: {
            id: string;
            totalEligibleTickets: number;
            algorithm: string;
            completedAt: Date | null;
            verificationHash: string | null;
        };
        claim: {
            id: string;
            status: import("../../generated/prisma/enums.ts").PrizeClaimStatus;
            claimedAt: Date | null;
            deliveredAt: Date | null;
            confirmedAt: Date | null;
        } | null;
    }[]>;
    findAllGiveaways(filters?: Prisma.GiveawayWhereInput): Promise<({
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            name: string;
        } | null;
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
    })[]>;
    updateGiveaway(id: string, data: Prisma.GiveawayUpdateInput): Promise<{
        category: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            name: string;
        } | null;
        prize: {
            id: string;
            createdAt: Date;
            updatedAt: Date;
            giveawayId: string;
            description: string;
            currency: string | null;
            name: string;
            estimatedValue: import("@prisma/client-runtime-utils").Decimal;
            condition: string | null;
        } | null;
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
    }>;
    deleteGiveaway(id: string): Promise<{
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
    }>;
};
//# sourceMappingURL=giveaway.repository.d.ts.map