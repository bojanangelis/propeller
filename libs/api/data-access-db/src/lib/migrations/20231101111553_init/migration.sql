/*
  Warnings:

  - You are about to drop the `HomeBlock` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Image` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductLength` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ProductSize` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `RgbColor` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToProductCategory` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToProductLength` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToProductSize` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_ProductToRgbColor` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[ratingId]` on the table `Product` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `categoryId` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ratingId` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "HomeBlock" DROP CONSTRAINT "HomeBlock_imageId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_productId_fkey";

-- DropForeignKey
ALTER TABLE "Image" DROP CONSTRAINT "Image_rgbBackgroundId_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductCategory" DROP CONSTRAINT "_ProductToProductCategory_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductCategory" DROP CONSTRAINT "_ProductToProductCategory_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductLength" DROP CONSTRAINT "_ProductToProductLength_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductLength" DROP CONSTRAINT "_ProductToProductLength_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductSize" DROP CONSTRAINT "_ProductToProductSize_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToProductSize" DROP CONSTRAINT "_ProductToProductSize_B_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToRgbColor" DROP CONSTRAINT "_ProductToRgbColor_A_fkey";

-- DropForeignKey
ALTER TABLE "_ProductToRgbColor" DROP CONSTRAINT "_ProductToRgbColor_B_fkey";

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "categoryId" INTEGER NOT NULL,
ADD COLUMN     "image" TEXT NOT NULL,
ADD COLUMN     "ratingId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "HomeBlock";

-- DropTable
DROP TABLE "Image";

-- DropTable
DROP TABLE "ProductCategory";

-- DropTable
DROP TABLE "ProductLength";

-- DropTable
DROP TABLE "ProductSize";

-- DropTable
DROP TABLE "RgbColor";

-- DropTable
DROP TABLE "_ProductToProductCategory";

-- DropTable
DROP TABLE "_ProductToProductLength";

-- DropTable
DROP TABLE "_ProductToProductSize";

-- DropTable
DROP TABLE "_ProductToRgbColor";

-- CreateTable
CREATE TABLE "Category" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Rating" (
    "id" SERIAL NOT NULL,
    "rate" DOUBLE PRECISION NOT NULL,
    "count" INTEGER NOT NULL,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Product_ratingId_key" ON "Product"("ratingId");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_ratingId_fkey" FOREIGN KEY ("ratingId") REFERENCES "Rating"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
