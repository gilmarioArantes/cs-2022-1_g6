import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';
import { LoginUserDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService, private userService: UserService ) {}

  @Post('sign-up')
  async signUp(@Body() createUserDto: CreateUserDto) {
      return this.userService.create(createUserDto);
  }

  @Post('sign-in')
  async login(@Body() data: LoginUserDto) {
      return await this.authService.login(data);
  }
}
