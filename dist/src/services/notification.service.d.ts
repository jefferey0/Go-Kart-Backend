export declare const notificationService: {
    list(userId: string, query: any): Promise<{
        data: {
            id: string;
            createdAt: Date;
            userId: string;
            type: import("../../generated/prisma/enums.js").NotificationType;
            title: string;
            message: string;
            read: boolean;
        }[];
        pagination: {
            page: number;
            limit: number;
            total: number;
            totalPages: number;
        };
    }>;
    markRead(userId: string, id: string): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
    markAllRead(userId: string): Promise<import("../../generated/prisma/internal/prismaNamespace.js").BatchPayload>;
};
//# sourceMappingURL=notification.service.d.ts.map