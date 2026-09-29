import type { Prisma } from "../../generated/prisma/client.ts";
import prisma from "../lib/prisma.ts";

export const platformSettingsRepository = {
  async getById(id: string) {
    return prisma.platformSettings.findUnique({ where: { id } });
  },

  async upsert(
    id: string,
    create: Prisma.PlatformSettingsCreateInput,
    update: Prisma.PlatformSettingsUpdateInput,
  ) {
    return prisma.platformSettings.upsert({ where: { id }, create, update });
  },
};