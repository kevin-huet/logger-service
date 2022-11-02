-- CreateEnum
CREATE TYPE "LogType" AS ENUM ('INFO', 'ERROR', 'DEBUG', 'WARNING');

-- CreateTable
CREATE TABLE "Log" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "description" TEXT,
    "Service" TEXT,
    "type" "LogType" DEFAULT 'INFO',

    CONSTRAINT "Log_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Log_id_key" ON "Log"("id");
