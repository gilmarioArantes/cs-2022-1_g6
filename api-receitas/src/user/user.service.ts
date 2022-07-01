import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/PrismaService';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {

  constructor(private prisma: PrismaService){

  }

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({
      data: createUserDto,
    });

    return user;
  }

  async findAll() {
    return await this.prisma.user.findMany({
      orderBy: {
        id: 'asc'
      },
    });
  }

  async findOne(id: number, req) {

    if(req.user.id != id){
      throw new UnauthorizedException();
    }

    return await this.prisma.user.findFirst({
      where:{
        id
      }
    });
  }

  async findOneByEmail(email: string) {
    return await this.prisma.user.findUnique({
      where:{
        email: email
      }
    });
  }

  update(id: number, updateUserDto: UpdateUserDto, req) {

    console.log(req.user.id)
    console.log(id)

    if(req.user.id != id){
      throw new UnauthorizedException("Cannot update another user");
    }
    return this.prisma.user.update({
      where: {
        id
      },
      data: updateUserDto
    });
  }

  remove(id: number, req) {

    if(req.user.id != id){
      throw new UnauthorizedException("Cannot remove another user");
    }

    return this.prisma.user.delete({
      where: {
        id
      }
    });
  }
}
