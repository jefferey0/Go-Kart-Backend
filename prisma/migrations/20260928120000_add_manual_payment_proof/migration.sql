ALTER TABLE "Payment"
ADD COLUMN "paymentMethodId" TEXT,
ADD COLUMN "proofImageUrl" TEXT;

CREATE INDEX "Payment_paymentMethodId_idx" ON "Payment"("paymentMethodId");

ALTER TABLE "Payment"
ADD CONSTRAINT "Payment_paymentMethodId_fkey"
FOREIGN KEY ("paymentMethodId") REFERENCES "PaymentMethod"("id")
ON DELETE SET NULL ON UPDATE CASCADE;