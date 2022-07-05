import { Module } from '@nestjs/common';
import { RecibesService } from './recibes.service'
import { RecibesController } from './recibes.controller'
import { PrismaService } from 'src/database/PrismaService';

@Module({
  controllers: [RecibesController],
  providers: [RecibesService, PrismaService],
})
export class RecibesModule {}
