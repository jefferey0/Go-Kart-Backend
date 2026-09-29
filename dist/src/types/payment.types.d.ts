export interface InitializePaymentData {
    userId: string;
    orderId: string;
    email: string;
}
export interface VerifyPaymentResult {
    status: boolean;
    message: string;
    data: {
        reference: string;
        amount: number;
        status: string;
        paid_at: string | null;
        currency: string;
        customer: {
            email: string;
        };
    };
}
//# sourceMappingURL=payment.types.d.ts.map