import type { Prisma } from "../../generated/prisma/client.ts";
export declare const platformSettingsRepository: {
    getById(id: string): Promise<{
        id: string;
        updatedAt: Date;
        siteName: string;
        supportEmail: string | null;
        defaultCurrency: string;
        updatedById: string | null;
    } | null>;
    upsert(id: string, create: Prisma.PlatformSettingsCreateInput, update: Prisma.PlatformSettingsUpdateInput): Promise<{
        id: string;
        updatedAt: Date;
        siteName: string;
        supportEmail: string | null;
        defaultCurrency: string;
        updatedById: string | null;
    }>;
};
//# sourceMappingURL=platformSettings.repository.d.ts.map