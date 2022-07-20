import { UpdateUserDto } from './../user/dto/update-user.dto';
import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
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

  
  async update(id: number, data: CreateRecipesDto, req){

    
    const recipe = await this.prisma.recipes.findUnique({
      where: {
        id: id
      }
    })

    if(recipe){
      if(recipe.userId != req.user.id){
        throw new UnauthorizedException("Cannot update recipe");
      }
  
      return await this.prisma.recipes.update({
      data,
      where: {
        id: id
      }
    })
    }
    else {
      throw new NotFoundException("Recipe not found")
    }
  }


  async remove(id: number, req) {

    const recipe = await this.prisma.recipes.findUnique({
       where: {
         id: id
       }
     })
     if(recipe){
       if(recipe.userId != req.user.id){
         throw new UnauthorizedException("Cannot remove another recipes");
       }
   
       return await this.prisma.recipes.delete({
         where: {
           id: id
         }
       })
     }
       else {
         throw new NotFoundException("Recipe not found")
       }
   
   }
}
