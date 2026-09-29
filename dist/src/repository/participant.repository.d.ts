export declare const participantRepository: {
    getAll(giveawayId: string, search?: string): Promise<{
        user: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
        };
        entries: number;
        amountSpent: number;
        joinedAt: Date;
    }[]>;
    getByUserId(giveawayId: string, userId: string): Promise<{
        user: {
            id: string;
            firstName: string;
            lastName: string;
            email: string;
        };
        entries: number;
        amountSpent: number;
        joinedAt: Date;
    } | null>;
};
//# sourceMappingURL=participant.repository.d.ts.map