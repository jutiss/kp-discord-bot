-- CreateTable
CREATE TABLE `Movie` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `kinopoiskId` INTEGER NOT NULL,
    `suggestedBy` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `viewedAt` DATETIME(3) NULL,

    UNIQUE INDEX `Movie_title_key`(`title`),
    UNIQUE INDEX `Movie_kinopoiskId_key`(`kinopoiskId`),
    UNIQUE INDEX `Movie_viewedAt_key`(`viewedAt`),
    FULLTEXT INDEX `Movie_title_idx`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
