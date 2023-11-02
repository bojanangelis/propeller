/*
  Warnings:

  - You are about to drop the column `imagePath` on the `Image` table. All the data in the column will be lost.
  - Added the required column `img` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "imagePath",
ADD COLUMN     "img" TEXT NOT NULL;
