export declare const notificationRepository: {
    list(userId: string, skip: number, take: number, giveawayId?: string): Promise<{
        data: {
            id: string;
            createdAt: Date;
            userId: string;
            type: import("../../generated/prisma/enums.ts").NotificationType;
            title: string;
            message: string;
            read: boolean;
        }[];
        total: number;
    }>;
};
//# sourceMappingURL=notification.repository.d.ts.map