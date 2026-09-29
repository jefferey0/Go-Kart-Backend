import prisma from "../lib/prisma.js";
export const platformSettingsRepository = {
    async getById(id) {
        return prisma.platformSettings.findUnique({ where: { id } });
    },
    async upsert(id, create, update) {
        return prisma.platformSettings.upsert({ where: { id }, create, update });
    },
};
//# sourceMappingURL=platformSettings.repository.js.map