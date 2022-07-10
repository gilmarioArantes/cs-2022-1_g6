import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CreateRecipesDto } from './dto/create-recipes.dto';
import { RecipesService } from './recipes.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Request() req, @Body() data: CreateRecipesDto) {
    return this.recipesService.create(req, data)
  }

  @Get()
  async findAll() {
    return this.recipesService.findAll();
  }
}
