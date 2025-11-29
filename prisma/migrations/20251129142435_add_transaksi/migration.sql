-- CreateTable
CREATE TABLE `transaksi` (
    `id_transaksi` INTEGER NOT NULL AUTO_INCREMENT,
    `loginId` INTEGER NOT NULL,
    `tiketId` INTEGER NOT NULL,
    `jumlah` INTEGER NOT NULL,
    `total_harga` INTEGER NOT NULL,
    `tanggal_transaksi` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id_transaksi`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_loginId_fkey` FOREIGN KEY (`loginId`) REFERENCES `login`(`id_login`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `transaksi` ADD CONSTRAINT `transaksi_tiketId_fkey` FOREIGN KEY (`tiketId`) REFERENCES `detail_tiket`(`id_tiket`) ON DELETE RESTRICT ON UPDATE CASCADE;
