import { Controller, Request, Post, Body, UseGuards, HttpStatus, Res, UnprocessableEntityException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtGuard } from '../auth/guards/jwt.guard';
import { CreateAdminDto } from './dto/create-user.dto';
import { LoginUserDTO } from './dto/login-user.dto';
import { ResetPasswordDto } from './dto/reset-password.dto';
import { EmailDTO } from './dto/email.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('/register')
    async register(
        @Body() body: CreateAdminDto,
        @Res() res: any,
    ): Promise<any> {
        return await this.authService.register(body)
            .then(async response => {
                return res.status(HttpStatus.OK).json({
                    status: HttpStatus.OK,
                    data: response,
                });
            })
            .catch((error: any) => {
                throw new UnprocessableEntityException(error.message);
            });
    }

    @Post('/login')
    async login(
        @Body() body: LoginUserDTO,
        @Res() res: any,
    ): Promise<any> {
        return await this.authService.login(body)
            .then(async response => {
                return res.status(HttpStatus.OK).json({
                    status: HttpStatus.OK,
                    data: response,
                });
            })
            .catch((error: any) => {
                throw new UnprocessableEntityException(error.message);
            });
    }

    @Post('/forgot-password')
    async forgotPassword(
        @Body() body: EmailDTO,
        @Res() res: any,
    ): Promise<any> {
        return await this.authService.sendForgotPasswordMail(body.email)
            .then(async response => {
                return res.status(HttpStatus.OK).json({
                    status: HttpStatus.OK,
                    data: response,
                });
            })
            .catch((error: any) => {
                throw new UnprocessableEntityException(error.message);
            });
    }

    @UseGuards(JwtGuard)
    @Post('/reset-password')
    async resetPassword(
        @Body() body: ResetPasswordDto,
        @Request() request: any,
        @Res() res: any,
    ): Promise<any> {
        return await this.authService
            .resetPassword(body, request.user)
            .then(async response => {
                return res.status(HttpStatus.OK).json({
                    status: HttpStatus.OK,
                    data: response,
                });
            })
            .catch((error: any) => {
                throw new UnprocessableEntityException(error.message);
            });
    }
}