import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/database/PrismaService";
import { CreateRecibesDto } from "./dto/create-recibes.dto";

@Injectable()
export class RecibesService {

  constructor(private prisma: PrismaService) {}

  async create(createRecibesDto: CreateRecibesDto) {
    const recibe = await this.prisma.recipes.create({
      data: createRecibesDto,
    });

    return recibe;
  }

  async findAll() {
    return await this.prisma.recipes.findMany({})
  }
}
