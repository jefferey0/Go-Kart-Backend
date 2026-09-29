import type { PaymentStatus } from "../../../generated/prisma/enums";
export interface CreatePaymentDto {
    orderId: string;
    reference?: string;
}
export interface UpdatePaymentDto {
    status?: PaymentStatus;
    reference?: string;
}
//# sourceMappingURL=payment.dto.d.ts.map