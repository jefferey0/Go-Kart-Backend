/*
  Warnings:

  - Added the `provider` column to the `Payment` table.
  - Existing payments are assigned `PAYSTACK`.
*/

-- CreateEnum
CREATE TYPE "PaymentProvider" AS ENUM ('PAYSTACK', 'STRIPE');

ALTER TABLE "Payment"
ADD COLUMN "provider" "PaymentProvider";

UPDATE "Payment"
SET "provider" = 'PAYSTACK'
WHERE "provider" IS NULL;

ALTER TABLE "Payment"
ALTER COLUMN "provider" SET NOT NULL;
