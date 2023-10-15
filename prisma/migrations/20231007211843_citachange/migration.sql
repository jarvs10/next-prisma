/*
  Warnings:

  - You are about to drop the column `userId` on the `cita` table. All the data in the column will be lost.
  - Added the required column `author` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cita` DROP FOREIGN KEY `Cita_userId_fkey`;

-- AlterTable
ALTER TABLE `cita` DROP COLUMN `userId`,
    ADD COLUMN `author` VARCHAR(191) NOT NULL;
