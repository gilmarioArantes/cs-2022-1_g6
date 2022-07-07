import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { RecipesModule } from './recipes/recipes.module';

@Module({
  imports: [AuthModule, UserModule, RecipesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
