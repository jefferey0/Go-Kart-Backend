import type { Prisma } from "../../generated/prisma/client.ts";
import { AppError } from "../utils/Response/http-error.ts";
import { platformSettingsRepository } from "../repository/platformSettings.repository.ts";

const settingsId = "global";
const defaultSettings = {
  id: settingsId,
  siteName: "GoKart",
  supportEmail: null,
  defaultCurrency: "GBP",
};

type SettingsPatch = {
  siteName?: string;
  supportEmail?: string | null;
  defaultCurrency?: string;
};

const parsePatch = (input: unknown): SettingsPatch => {
  if (!input || typeof input !== "object" || Array.isArray(input)) {
    throw new AppError(400, "Settings must be a JSON object", "INVALID_SETTINGS");
  }

  const body = input as Record<string, unknown>;
  const allowedKeys = new Set(["siteName", "supportEmail", "defaultCurrency"]);
  const unknownKeys = Object.keys(body).filter((key) => !allowedKeys.has(key));
  if (unknownKeys.length) {
    throw new AppError(400, `Unsupported setting: ${unknownKeys[0]}`, "UNKNOWN_SETTING");
  }
  if (!Object.keys(body).length) {
    throw new AppError(400, "At least one setting is required", "EMPTY_SETTINGS");
  }

  const patch: SettingsPatch = {};
  if ("siteName" in body) {
    if (typeof body.siteName !== "string" || !body.siteName.trim() || body.siteName.trim().length > 100) {
      throw new AppError(400, "Site name must contain 1 to 100 characters", "INVALID_SITE_NAME");
    }
    patch.siteName = body.siteName.trim();
  }

  if ("supportEmail" in body) {
    if (body.supportEmail === null) {
      patch.supportEmail = null;
    } else if (
      typeof body.supportEmail !== "string" ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.supportEmail.trim())
    ) {
      throw new AppError(400, "Support email must be a valid email address or null", "INVALID_SUPPORT_EMAIL");
    } else {
      patch.supportEmail = body.supportEmail.trim().toLowerCase();
    }
  }

  if ("defaultCurrency" in body) {
    if (typeof body.defaultCurrency !== "string" || !/^[A-Za-z]{3}$/.test(body.defaultCurrency.trim())) {
      throw new AppError(400, "Default currency must be a three-letter code", "INVALID_CURRENCY");
    }
    patch.defaultCurrency = body.defaultCurrency.trim().toUpperCase();
  }

  return patch;
};

export const platformSettingsService = {
  async get() {
    const settings = await platformSettingsRepository.getById(settingsId);
    return settings ?? { ...defaultSettings, updatedAt: null, updatedById: null };
  },

  async update(input: unknown, adminId: string) {
    const patch = parsePatch(input);
    const createData: Prisma.PlatformSettingsCreateInput = {
      ...defaultSettings,
      ...patch,
      updatedBy: { connect: { id: adminId } },
    };
    const updateData: Prisma.PlatformSettingsUpdateInput = {
      ...patch,
      updatedBy: { connect: { id: adminId } },
    };

    return platformSettingsRepository.upsert(settingsId, createData, updateData);
  },
};