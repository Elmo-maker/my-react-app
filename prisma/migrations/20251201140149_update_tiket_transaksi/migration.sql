/*
  Warnings:

  - You are about to drop the `detail_tiket` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `harga_tiket` to the `event_tiket` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `detail_tiket` DROP FOREIGN KEY `detail_tiket_eventId_fkey`;

-- DropForeignKey
ALTER TABLE `transaksi` DROP FOREIGN KEY `transaksi_tiketId_fkey`;

-- DropIndex
DROP INDEX `transaksi_tiketId_fkey` ON `transaksi`;

-- AlterTable
ALTER TABLE `event_tiket` ADD COLUMN `harga_tiket` INTEGER NOT NULL;

-- DropTable
DROP TABLE `detail_tiket`;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_tiketId_fkey` FOREIGN KEY (`tiketId`) REFERENCES `event_tiket`(`id_event`) ON DELETE RESTRICT ON UPDATE CASCADE;
