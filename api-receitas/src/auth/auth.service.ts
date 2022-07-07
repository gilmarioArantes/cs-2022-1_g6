import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/database/PrismaService';
import { UserService } from 'src/user/user.service';
import { LoginUserDto } from './dto/login.dto';

@Injectable()
export class AuthService {

    constructor(
        private userService: UserService,
        private jwtService: JwtService,
        private prisma: PrismaService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByEmail(username);
        if (user && user.password === pass) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(data: LoginUserDto) {

        const {email, password} = data;

        const user = await this.prisma.user.findFirst({
            where: {
                email: email
            }
        })

        if(user && user.password === password){
            const payload = { id: user.id, email: user.email, name: user.name };
            return {access_token: this.jwtService.sign(payload)};
        }else{
            throw new UnauthorizedException("Check the credentials and try again");
        }
    }

}
