CREATE TABLE "PlatformSettings" (
    "id" TEXT NOT NULL DEFAULT 'global',
    "siteName" TEXT NOT NULL DEFAULT 'GoKart',
    "supportEmail" TEXT,
    "defaultCurrency" TEXT NOT NULL DEFAULT 'GBP',
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedById" TEXT,

    CONSTRAINT "PlatformSettings_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "PlatformSettings_updatedById_idx" ON "PlatformSettings"("updatedById");

ALTER TABLE "PlatformSettings"
ADD CONSTRAINT "PlatformSettings_updatedById_fkey"
FOREIGN KEY ("updatedById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;