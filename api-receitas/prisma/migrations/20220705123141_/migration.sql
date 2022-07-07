-- DropForeignKey
ALTER TABLE "tb_user" DROP CONSTRAINT "tb_user_recipesId_fkey";

-- AlterTable
ALTER TABLE "tb_user" ALTER COLUMN "recipesId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "tb_user" ADD CONSTRAINT "tb_user_recipesId_fkey" FOREIGN KEY ("recipesId") REFERENCES "tb_recipes"("id") ON DELETE SET NULL ON UPDATE CASCADE;
