import { Controller, Post, Body, HttpStatus, Res, Request, UnprocessableEntityException, UseGuards, Get, Param, UseInterceptors, UploadedFile, Query, UploadedFiles } from '@nestjs/common';
import { AdminService } from './admin.service';
import { VerificationDto } from './dto/verification';
import { LoginAdminDTO } from './dto/login-admin.dto';
import { EmailDTOAdmin } from './dto/forgot-password-admin.dto';
import { ResetPasswordDtoAdmin } from './dto/reset-password-admin.dto';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { FileInterceptor, FileFieldsInterceptor, AnyFilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
@Controller('admin')
export class AdminController {
    constructor(private readonly adminService: AdminService) { }

    @Post('/login')
    async loginUser(
        @Body() body: LoginAdminDTO,
        @Res() res: any,
    ): Promise<any> {
        return await this.adminService
            .login(body)
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
        @Body() body: EmailDTOAdmin,
        @Res() res: any,
    ): Promise<any> {
        return await this.adminService
            .sendForgotPasswordEmail(body)
            .then(async response => {
                return res.status(HttpStatus.OK).json({
                    status: HttpStatus.OK,
                    data: response,
                });
            })
            .catch((error: any) => {
                console.log(error)
                throw new UnprocessableEntityException(error.message);
            });
    }

    @UseGuards(JwtGuard)
    @Post('/reset-password')
    async resetPassword(
        @Body() body: ResetPasswordDtoAdmin,
        @Request() request: any,
        @Res() res: any,
    ): Promise<any> {
        return await this.adminService
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

    
    @UseGuards(JwtGuard)
    @Get('/notification')
    async getNotification(
        @Request() request: any,
        @Res() res: any,
    ): Promise<any> {
        return await this.adminService.getNotificationAdmin(request.user._id)
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
    @Get('profile')
    async getProfile(
        @Res() res: any,
        @Request() request: any
    ): Promise<any> {
        return await this.adminService.getProfile(request.user._id)
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
    @Get('dashboard')
    async getDashboardInfo(
        @Res() res: any,
        @Request() request: any
    ): Promise<any> {
        return await this.adminService.getDashboardInfo()
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