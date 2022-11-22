-- CreateTable
CREATE TABLE `Atividade` (
    `idActivitySession` INTEGER NOT NULL,
    `startTime` VARCHAR(191) NOT NULL,
    `endTime` VARCHAR(191) NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `area` VARCHAR(191) NOT NULL,
    `instructor` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `client` VARCHAR(191) NULL,

    PRIMARY KEY (`idActivitySession`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
