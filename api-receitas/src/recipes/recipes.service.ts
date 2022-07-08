import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateRecipesDto } from "./dto/create-recipes.dto";

@Injectable()
export class RecipesService {

  constructor(
    private prisma: PrismaService) {}

  async create(req, createRecipesDto: CreateRecipesDto) {

    createRecipesDto.userId = req.user.id;

    const recibe = await this.prisma.recipes.create({
      data: createRecipesDto,
    });

    return recibe;
  }

  async findAll() {
    return await this.prisma.recipes.findMany({})
  }
}