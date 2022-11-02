/*
  Warnings:

  - You are about to drop the column `Service` on the `Log` table. All the data in the column will be lost.
  - The `type` column on the `Log` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Log" DROP COLUMN "Service",
ADD COLUMN     "service" TEXT,
DROP COLUMN "type",
ADD COLUMN     "type" TEXT DEFAULT 'INFO';

-- DropEnum
DROP TYPE "LogType";
