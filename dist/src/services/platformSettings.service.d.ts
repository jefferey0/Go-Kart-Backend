export declare const platformSettingsService: {
    get(): Promise<{
        id: string;
        updatedAt: Date;
        siteName: string;
        supportEmail: string | null;
        defaultCurrency: string;
        updatedById: string | null;
    } | {
        updatedAt: null;
        updatedById: null;
        id: string;
        siteName: string;
        supportEmail: null;
        defaultCurrency: string;
    }>;
    update(input: unknown, adminId: string): Promise<{
        id: string;
        updatedAt: Date;
        siteName: string;
        supportEmail: string | null;
        defaultCurrency: string;
        updatedById: string | null;
    }>;
};
//# sourceMappingURL=platformSettings.service.d.ts.map