/*
  Warnings:

  - You are about to drop the column `recipesId` on the `tb_user` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "tb_user" DROP CONSTRAINT "tb_user_recipesId_fkey";

-- AlterTable
ALTER TABLE "tb_recipes" ADD COLUMN     "userId" INTEGER;

-- AlterTable
ALTER TABLE "tb_user" DROP COLUMN "recipesId";

-- AddForeignKey
ALTER TABLE "tb_recipes" ADD CONSTRAINT "tb_recipes_userId_fkey" FOREIGN KEY ("userId") REFERENCES "tb_user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
