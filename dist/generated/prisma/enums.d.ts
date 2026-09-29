export declare const UserRole: {
    readonly USER: "USER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const GiveawayStatus: {
    readonly DRAFT: "DRAFT";
    readonly PUBLISHED: "PUBLISHED";
    readonly ACTIVE: "ACTIVE";
    readonly CLOSED: "CLOSED";
    readonly DRAWING: "DRAWING";
    readonly WINNER_SELECTED: "WINNER_SELECTED";
    readonly PRIZE_FULFILMENT: "PRIZE_FULFILMENT";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly SUSPENDED: "SUSPENDED";
};
export type GiveawayStatus = (typeof GiveawayStatus)[keyof typeof GiveawayStatus];
export declare const OrderStatus: {
    readonly PENDING: "PENDING";
    readonly CONFIRMED: "CONFIRMED";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
    readonly CANCELED: "CANCELED";
};
export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus];
export declare const PaymentMethodType: {
    readonly CRYPTO: "CRYPTO";
    readonly PAYMENT_APP: "PAYMENT_APP";
};
export type PaymentMethodType = (typeof PaymentMethodType)[keyof typeof PaymentMethodType];
export declare const PaymentMethodProvider: {
    readonly BITCOIN: "BITCOIN";
    readonly ETHEREUM: "ETHEREUM";
    readonly PAYPAL: "PAYPAL";
    readonly CASH_APP: "CASH_APP";
    readonly VENMO: "VENMO";
    readonly ZELLE: "ZELLE";
    readonly OTHER: "OTHER";
};
export type PaymentMethodProvider = (typeof PaymentMethodProvider)[keyof typeof PaymentMethodProvider];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const TicketStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly WINNER: "WINNER";
    readonly INVALIDATED: "INVALIDATED";
};
export type TicketStatus = (typeof TicketStatus)[keyof typeof TicketStatus];
export declare const WinnerStatus: {
    readonly SELECTED: "SELECTED";
    readonly CLAIMED: "CLAIMED";
    readonly FULFILMENT: "FULFILMENT";
    readonly COMPLETED: "COMPLETED";
    readonly DISPUTED: "DISPUTED";
};
export type WinnerStatus = (typeof WinnerStatus)[keyof typeof WinnerStatus];
export declare const DrawStatus: {
    readonly PENDING: "PENDING";
    readonly RUNNING: "RUNNING";
    readonly COMPLETED: "COMPLETED";
    readonly FAILED: "FAILED";
};
export type DrawStatus = (typeof DrawStatus)[keyof typeof DrawStatus];
export declare const PrizeClaimStatus: {
    readonly PENDING: "PENDING";
    readonly CLAIMED: "CLAIMED";
    readonly CONTACTED: "CONTACTED";
    readonly SHIPPING: "SHIPPING";
    readonly DELIVERED: "DELIVERED";
    readonly CONFIRMED: "CONFIRMED";
    readonly DISPUTED: "DISPUTED";
};
export type PrizeClaimStatus = (typeof PrizeClaimStatus)[keyof typeof PrizeClaimStatus];
export declare const NotificationType: {
    readonly PURCHASE_CONFIRMED: "PURCHASE_CONFIRMED";
    readonly GIVEAWAY_ENDING: "GIVEAWAY_ENDING";
    readonly WINNER_SELECTED: "WINNER_SELECTED";
    readonly PRIZE_CLAIM: "PRIZE_CLAIM";
    readonly PRIZE_DELIVERY: "PRIZE_DELIVERY";
    readonly SYSTEM: "SYSTEM";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
export declare const AuditAction: {
    readonly GIVEAWAY_CREATED: "GIVEAWAY_CREATED";
    readonly GIVEAWAY_UPDATED: "GIVEAWAY_UPDATED";
    readonly GIVEAWAY_PUBLISHED: "GIVEAWAY_PUBLISHED";
    readonly GIVEAWAY_PAUSED: "GIVEAWAY_PAUSED";
    readonly GIVEAWAY_CLOSED: "GIVEAWAY_CLOSED";
    readonly DRAW_STARTED: "DRAW_STARTED";
    readonly WINNER_SELECTED: "WINNER_SELECTED";
    readonly USER_SUSPENDED: "USER_SUSPENDED";
    readonly PAYMENT_CONFIRMED: "PAYMENT_CONFIRMED";
    readonly REFUND_CREATED: "REFUND_CREATED";
    readonly PRIZE_CLAIMED: "PRIZE_CLAIMED";
};
export type AuditAction = (typeof AuditAction)[keyof typeof AuditAction];
//# sourceMappingURL=enums.d.ts.map