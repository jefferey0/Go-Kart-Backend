import { giveawayRepository } from "../repository/giveaway.repository.ts";
import { GiveawayStatus, Prisma } from "../../generated/prisma/client.ts";
import { AppError } from "../utils/Response/http-error.ts";
import { platformSettingsService } from "./platformSettings.service.ts";

// Helper to generate a URL-friendly slug
const generateSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

export const giveawayService = {
  async create(payload: any, userId: string) {
    const settings = await platformSettingsService.get();
    // 1. Generate slug if not provided
    const slug = payload.slug || generateSlug(payload.title);

    // 2. Validate slug uniqueness
    const existing = await giveawayRepository.findGiveawayBySlug(slug);
    if (existing) {
      throw new AppError(
        400,
        "A giveaway with this slug already exists.",
        "GIVEAWAY_SLUG_EXISTS",
      );
    }

    // 3. Validate dates
    const start = new Date(payload.startDate);
    const end = new Date(payload.endDate);
    if (start >= end) {
      throw new AppError(
        400,
        "Start date must be before end date.",
        "INVALID_DATES",
      );
    }

    // 4. Prepare data for transaction (Creating Giveaway + Prize together)
    const createData: any = {
      title: payload.title,
      slug: slug,
      shortDescription: payload.shortDescription,
      description: payload.description,
      entryPrice: new Prisma.Decimal(payload.entryPrice),
      currency: payload.currency || settings.defaultCurrency,
      maximumEntries: payload.maximumEntries,
      maximumEntriesPerUser: payload.maximumEntriesPerUser,
      minimumEntriesPerPurchase: payload.minimumEntriesPerPurchase || 1,
      startDate: start,
      endDate: end,
      featured: payload.featured || false,
      status: payload.status || "DRAFT",
      createdBy: userId,
      categoryId: payload.categoryId || undefined,

      // Giveaway images (banner, etc.) — just URLs
      images: payload.images?.length
        ? {
            create: payload.images.map((url: string, index: number) => ({
              url,
              altText: payload.title,
              sortOrder: index,
            })),
          }
        : undefined,

      // Prize + Prize images — just URLs
      prize: payload.prize
        ? {
            create: {
              name: payload.prize.name,
              description: payload.prize.description,
              estimatedValue: new Prisma.Decimal(payload.prize.estimatedValue),
              currency: payload.prize.currency || "GBP",
              condition: payload.prize.condition,
              images: payload.prize.images?.length
                ? {
                    create: payload.prize.images.map(
                      (url: string, index: number) => ({
                        url,
                        altText: payload.prize.name,
                        sortOrder: index,
                      }),
                    ),
                  }
                : undefined,
            },
          } as any
        : undefined,
    };

    return await giveawayRepository.createGiveaway(createData);
  },

  async getGiveawayService(id: string) {
    const giveaway = await giveawayRepository.findGiveawayById(id);
    if (!giveaway)
      throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
    return giveaway;
  },

  async getAllGiveawaysService(filters?: {
    status?: GiveawayStatus;
    categoryId?: string;
    featured?: string;
  }) {
    const where: Prisma.GiveawayWhereInput = {};

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.categoryId) {
      where.categoryId = filters.categoryId;
    }

    if (filters?.featured) {
      where.featured = filters.featured === "true";
    }

    return await giveawayRepository.findAllGiveaways(where);
  },

  async getGiveawayBySlug(slug: string) {
    const giveaway = await giveawayRepository.findGiveawayBySlug(slug);
    if (!giveaway) throw new AppError(404, "Giveaway not found", "");
    return giveaway;
  },

  async getWinnerByGiveawayId(giveawayId: string) {
    // A giveaway can legitimately have no winners yet. Returning an empty
    // array prevents the public winner lookup from being treated as a server
    // error before the admin closes/selects winners.
    return await giveawayRepository.findWinnerByGiveawayId(giveawayId);
  },

  async updateGiveawayService(id: string, payload: any) {
    const existing = await giveawayRepository.findGiveawayById(id);
    if (!existing)
      throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");

    // Only pass real Giveaway fields to Prisma. The previous implementation
    // spread the entire frontend payload, so fields such as `paused` caused
    // Prisma to throw "Unknown argument" and return HTTP 500.
    const allowedFields = [
      "title",
      "shortDescription",
      "description",
      "currency",
      "maximumEntries",
      "maximumEntriesPerUser",
      "minimumEntriesPerPurchase",
      "entriesSold",
      "featured",
      "status",
      "categoryId",
    ];

    const updateData: any = {};
    for (const field of allowedFields) {
      if (payload[field] !== undefined) updateData[field] = payload[field];
    }

    if (payload.title && !payload.slug) {
      const generatedSlug = generateSlug(payload.title);
      const slugCheck = await giveawayRepository.findGiveawayBySlug(generatedSlug);
      if (slugCheck && slugCheck.id !== id) {
        throw new AppError(400, "A giveaway with this slug already exists.", "GIVEAWAY_SLUG_EXISTS");
      }
      updateData.slug = generatedSlug;
    } else if (payload.slug !== undefined) {
      const slugCheck = await giveawayRepository.findGiveawayBySlug(payload.slug);
      if (slugCheck && slugCheck.id !== id) {
        throw new AppError(400, "A giveaway with this slug already exists.", "GIVEAWAY_SLUG_EXISTS");
      }
      updateData.slug = payload.slug;
    }

    if (payload.entryPrice !== undefined) {
      updateData.entryPrice = new Prisma.Decimal(payload.entryPrice);
    }
    if (payload.startDate !== undefined) {
      updateData.startDate = new Date(payload.startDate);
    }
    if (payload.endDate !== undefined) {
      updateData.endDate = new Date(payload.endDate);
    }

    if (payload.prize) {
      updateData.prize = {
        update: {
          name: payload.prize.name,
          description: payload.prize.description,
          estimatedValue: payload.prize.estimatedValue !== undefined
            ? new Prisma.Decimal(payload.prize.estimatedValue)
            : undefined,
        },
      };
    }

    return await giveawayRepository.updateGiveaway(id, updateData);
  },

  async updateStatus(id: string, status: string) {
    const existing = await giveawayRepository.findGiveawayById(id);
    if (!existing) {
      throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
    }

    const allowedStatuses = ["DRAFT", "ACTIVE", "CLOSED", "WINNER_SELECTED"];
    if (!allowedStatuses.includes(status)) {
      throw new AppError(400, `Invalid giveaway status: ${status}`, "INVALID_GIVEAWAY_STATUS");
    }

    // A giveaway with selected winners must not silently be reopened as an
    // active sale. Winners remain attached to the giveaway.
    if (existing.status === "WINNER_SELECTED" && status !== "WINNER_SELECTED") {
      throw new AppError(409, "A giveaway with selected winners cannot be reopened or closed again.", "WINNERS_ALREADY_SELECTED");
    }

    return await giveawayRepository.updateGiveaway(id, { status: status as any });
  },

  async deleteGiveawayService(id: string) {
    const existing = await giveawayRepository.findGiveawayById(id);
    if (!existing)
      throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
    return await giveawayRepository.deleteGiveaway(id);
  },
};
