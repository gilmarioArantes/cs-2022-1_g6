/*
  Warnings:

  - Added the required column `recipesId` to the `tb_user` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "tb_user" ADD COLUMN     "recipesId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "tb_recipes" (
    "id" SERIAL NOT NULL,
    "ingredients" TEXT NOT NULL,
    "preparation" TEXT NOT NULL,
    "portions" INTEGER NOT NULL,

    CONSTRAINT "tb_recipes_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_user" ADD CONSTRAINT "tb_user_recipesId_fkey" FOREIGN KEY ("recipesId") REFERENCES "tb_recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
