/*
  Warnings:

  - Added the required column `fecha` to the `Cita` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora` to the `Cita` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cita` ADD COLUMN `fecha` VARCHAR(191) NOT NULL,
    ADD COLUMN `hora` VARCHAR(191) NOT NULL;
