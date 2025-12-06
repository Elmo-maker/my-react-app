-- CreateTable
CREATE TABLE `login` (
    `id_login` INTEGER NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'user',

    PRIMARY KEY (`id_login`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `event_tiket` (
    `id_event` INTEGER NOT NULL AUTO_INCREMENT,
    `nama_event` VARCHAR(191) NOT NULL,
    `tanggal_event` DATETIME(3) NOT NULL,
    `lokasi` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id_event`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `detail_tiket` (
    `id_tiket` INTEGER NOT NULL AUTO_INCREMENT,
    `tipe_tiket` VARCHAR(191) NOT NULL,
    `harga_tiket` INTEGER NOT NULL,
    `eventId` INTEGER NOT NULL,

    PRIMARY KEY (`id_tiket`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `detail_tiket` ADD CONSTRAINT `detail_tiket_eventId_fkey` FOREIGN KEY (`eventId`) REFERENCES `event_tiket`(`id_event`) ON DELETE RESTRICT ON UPDATE CASCADE;
