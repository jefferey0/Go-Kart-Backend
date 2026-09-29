/*
  Warnings:

  - You are about to drop the column `altText` on the `PrizeImage` table. All the data in the column will be lost.
  - You are about to drop the column `publicId` on the `PrizeImage` table. All the data in the column will be lost.
  - You are about to drop the `GiveawayImage` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "GiveawayImage" DROP CONSTRAINT "GiveawayImage_giveawayId_fkey";

-- AlterTable
ALTER TABLE "Giveaway" ALTER COLUMN "currency" SET DEFAULT 'GBP';

-- AlterTable
ALTER TABLE "PrizeImage" DROP COLUMN "altText",
DROP COLUMN "publicId";

-- DropTable
DROP TABLE "GiveawayImage";
