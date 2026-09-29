export declare const participantService: {
    getAll(giveawayId: string, search?: string): Promise<{
        giveaway: {
            id: string;
            title: string;
            slug: string;
        };
        participants: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            entries: number;
            amountSpent: number;
            joinedAt: Date;
        }[];
        total: number;
    }>;
    getByUserId(giveawayId: string, userId: string): Promise<{
        giveaway: {
            id: string;
            title: string;
            slug: string;
        };
        participant: {
            user: {
                id: string;
                firstName: string;
                lastName: string;
                email: string;
            };
            entries: number;
            amountSpent: number;
            joinedAt: Date;
        };
    }>;
};
//# sourceMappingURL=participant.service.d.ts.map