import { Module } from '@nestjs/common';
import { RecipesService } from './recipes.service'
import { RecipesController } from './recipes.controller'
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [RecipesController],
  providers: [RecipesService, PrismaService],
})
export class RecipesModule {}
