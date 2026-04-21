/*
  Warnings:

  - A unique constraint covering the columns `[secret]` on the table `Device` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Device_secret_key" ON "Device"("secret");
