-- CreateEnum
CREATE TYPE "PaymentMethodType" AS ENUM ('CRYPTO', 'PAYMENT_APP');

-- CreateEnum
CREATE TYPE "PaymentMethodProvider" AS ENUM ('BITCOIN', 'ETHEREUM', 'PAYPAL', 'CASH_APP', 'VENMO', 'ZELLE', 'OTHER');

-- CreateTable
CREATE TABLE "PaymentMethod" (
    "id" TEXT NOT NULL,
    "type" "PaymentMethodType" NOT NULL,
    "provider" "PaymentMethodProvider" NOT NULL,
    "name" TEXT NOT NULL,
    "details" TEXT NOT NULL,
    "network" TEXT,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PaymentMethod_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "PaymentMethod_type_idx" ON "PaymentMethod"("type");

-- CreateIndex
CREATE INDEX "PaymentMethod_isActive_idx" ON "PaymentMethod"("isActive");

-- CreateIndex
CREATE INDEX "PaymentMethod_type_isActive_idx" ON "PaymentMethod"("type", "isActive");
