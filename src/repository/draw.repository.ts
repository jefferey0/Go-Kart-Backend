import { createHash } from "node:crypto";
import prisma from "../lib/prisma.ts";
import { AppError } from "../utils/Response/http-error.ts";

export const drawRepository = {
  async selectWinners(giveawayId: string, ticketIds: string[], actorId: string) {
    const uniqueTicketIds = [...new Set(ticketIds.map((id) => id.trim()).filter(Boolean))];

    if (!uniqueTicketIds.length) {
      throw new AppError(400, "At least one ticket ID is required", "TICKET_IDS_REQUIRED");
    }

    return prisma.$transaction(
      async (tx) => {
        const giveaway = await tx.giveaway.findUnique({ where: { id: giveawayId } });
        if (!giveaway) {
          throw new AppError(404, "Giveaway not found", "GIVEAWAY_NOT_FOUND");
        }

        // A giveaway may be in CLOSED state for the first selection, or
        // WINNER_SELECTED when the admin is adding another batch of winners.
        if (giveaway.status !== "CLOSED" && giveaway.status !== "WINNER_SELECTED") {
          throw new AppError(
            409,
            "Giveaway must be CLOSED before selecting winners",
            "INVALID_DRAW_STATE",
          );
        }

        const selectedTickets = await tx.ticket.findMany({
          where: {
            id: { in: uniqueTicketIds },
            giveawayId,
            status: "ACTIVE",
            order: { status: "CONFIRMED" },
          },
          select: { id: true, userId: true },
        });

        const selectedById = new Map(selectedTickets.map((ticket) => [ticket.id, ticket]));
        const invalidTicketIds = uniqueTicketIds.filter((id) => !selectedById.has(id));

        if (invalidTicketIds.length) {
          throw new AppError(
            404,
            `One or more tickets are not eligible: ${invalidTicketIds.join(", ")}`,
            "ELIGIBLE_TICKET_NOT_FOUND",
          );
        }

        const totalEligibleTickets = await tx.ticket.count({
          where: {
            giveawayId,
            status: "ACTIVE",
            order: { status: "CONFIRMED" },
          },
        });

        const selectedAt = new Date();
        const winners = [];
        const draws = [];

        // One Draw record is created for each manually selected winner so the
        // existing one-winning-ticket Draw schema can remain auditable.
        for (const ticketId of uniqueTicketIds) {
          const selectedTicket = selectedById.get(ticketId)!;
          const verificationHash = createHash("sha256")
            .update(
              `${giveawayId}:${selectedTicket.id}:${totalEligibleTickets}:${actorId}:${selectedAt.toISOString()}`,
            )
            .digest("hex");

          const ticketUpdate = await tx.ticket.updateMany({
            where: { id: selectedTicket.id, status: "ACTIVE" },
            data: { status: "WINNER" },
          });

          if (ticketUpdate.count !== 1) {
            throw new AppError(409, "Ticket is no longer eligible", "TICKET_NOT_ELIGIBLE");
          }

          const draw = await tx.draw.create({
            data: {
              giveawayId,
              totalEligibleTickets,
              winningTicketId: selectedTicket.id,
              algorithm: "ADMIN_SELECTED",
              verificationHash,
              status: "COMPLETED",
              completedAt: selectedAt,
            },
          });

          const winner = await tx.winner.create({
            data: {
              giveawayId,
              userId: selectedTicket.userId,
              ticketId: selectedTicket.id,
              drawId: draw.id,
              selectedAt,
            },
            include: {
              user: { select: { id: true, firstName: true, lastName: true, email: true } },
              ticket: true,
              giveaway: true,
            },
          });

          const claim = await tx.prizeClaim.create({ data: { winnerId: winner.id } });

          await tx.notification.create({
            data: {
              userId: selectedTicket.userId,
              type: "WINNER_SELECTED",
              title: "Congratulations!",
              message: `You won ${giveaway.title}.`,
            },
          });

          winners.push({ ...winner, claim });
          draws.push(draw);
        }

        await tx.giveaway.update({
          where: { id: giveawayId },
          data: { status: "WINNER_SELECTED" },
        });

        await tx.auditLog.create({
          data: {
            actorId,
            action: "WINNER_SELECTED",
            entityType: "Giveaway",
            entityId: giveawayId,
            metadata: {
              drawIds: draws.map((draw) => draw.id),
              ticketIds: uniqueTicketIds,
              winnerCount: winners.length,
              method: "ADMIN_SELECTED",
            },
          },
        });

        return { winners, draws, winnerCount: winners.length };
      },
      { isolationLevel: "Serializable" },
    );
  },

  // Backward-compatible single-winner helper. New frontend code should use selectWinners().
  async selectWinner(giveawayId: string, ticketId: string, actorId: string) {
    return this.selectWinners(giveawayId, [ticketId], actorId);
  },
};
