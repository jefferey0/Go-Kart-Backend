import * as runtime from "@prisma/client/runtime/client";
import * as $Class from "./internal/class.ts";
import * as Prisma from "./internal/prismaNamespace.ts";
export * as $Enums from './enums.ts';
export * from "./enums.ts";
/**
 * ## Prisma Client
 *
 * Type-safe database client for TypeScript
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export declare const PrismaClient: $Class.PrismaClientConstructor;
export type PrismaClient<LogOpts extends Prisma.LogLevel = never, OmitOpts extends Prisma.PrismaClientOptions["omit"] = Prisma.PrismaClientOptions["omit"], ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = $Class.PrismaClient<LogOpts, OmitOpts, ExtArgs>;
export { Prisma };
/**
 * Model User
 *
 */
export type User = Prisma.UserModel;
/**
 * Model RefreshToken
 *
 */
export type RefreshToken = Prisma.RefreshTokenModel;
/**
 * Model Category
 *
 */
export type Category = Prisma.CategoryModel;
/**
 * Model Giveaway
 *
 */
export type Giveaway = Prisma.GiveawayModel;
/**
 * Model Prize
 *
 */
export type Prize = Prisma.PrizeModel;
/**
 * Model PrizeImage
 *
 */
export type PrizeImage = Prisma.PrizeImageModel;
/**
 * Model Order
 *
 */
export type Order = Prisma.OrderModel;
/**
 * Model Payment
 *
 */
export type Payment = Prisma.PaymentModel;
/**
 * Model PaymentMethod
 *
 */
export type PaymentMethod = Prisma.PaymentMethodModel;
/**
 * Model Ticket
 *
 */
export type Ticket = Prisma.TicketModel;
/**
 * Model Winner
 *
 */
export type Winner = Prisma.WinnerModel;
/**
 * Model Draw
 *
 */
export type Draw = Prisma.DrawModel;
/**
 * Model PrizeClaim
 *
 */
export type PrizeClaim = Prisma.PrizeClaimModel;
/**
 * Model Notification
 *
 */
export type Notification = Prisma.NotificationModel;
/**
 * Model AuditLog
 *
 */
export type AuditLog = Prisma.AuditLogModel;
/**
 * Model PlatformSettings
 *
 */
export type PlatformSettings = Prisma.PlatformSettingsModel;
//# sourceMappingURL=client.d.ts.map