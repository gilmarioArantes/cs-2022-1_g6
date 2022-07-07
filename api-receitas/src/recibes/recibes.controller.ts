import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { CreateRecibesDto } from './dto/create-recibes.dto';
import { RecibesService } from './recibes.service';

@Controller('recibes')
export class RecibesController {
  constructor(private readonly recibesService: RecibesService) {}

  @Post()
  async create(@Body() data: CreateRecibesDto) {
    return this.recibesService.create(data)
  }

  @Get()
  async findAll() {
    return this.recibesService.findAll();
  }
}
