import {
  Controller,
  Post,
  Res,
  HttpStatus,
  Request,
  UnprocessableEntityException,
  Get,
  Body,
  UseGuards,
  Param,
  Query,
  UseInterceptors,
  UploadedFile,
  UploadedFiles,
} from '@nestjs/common';
import { CommonService } from './common.service';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { changePasswordDtoAdmin } from './dto/change-password.dto';
import { DeleteContentDto } from './dto/delete-content.dto';
import { ContentDto } from './dto/add-content.dto';
import { FileInterceptor, FileFieldsInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';
import * as fs from "fs";
import * as PdfPrinter from "pdfmake";
import { UpdateProfileDto } from './dto/update-profile.dto';

@Controller('common')
export class CommomController {
  constructor(private readonly commonService: CommonService) {}

  @Get('/content')
  async getContent(@Body() body: any, @Res() res: any): Promise<any> {
    return this.commonService.getContent(body).then((data) => {
      return res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: data,
      });
    });
  }

  
  @UseGuards(JwtGuard)
  @Post('/change-password')
  async changePassword(
    @Body() body: changePasswordDtoAdmin,
    @Request() request: any,
    @Res() res: any,
  ): Promise<any> {
    return await this.commonService
      .changePassword(body, request.user)
      .then(async (response) => {
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
  @Post('add-content')
  async addUpdateContentInfo(
    @Res() res: any,
    @Body() body: ContentDto,
  ): Promise<any> {
    return await this.commonService
      .addUpdateContent(body)
      .then(async (response) => {
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
  @Post('delete-content')
  async deleteContentInfo(
    @Res() res: any,
    @Body() body: DeleteContentDto,
  ): Promise<any> {
    return await this.commonService
      .deleteContent(body.content_id)
      .then(async (response) => {
        return res.status(HttpStatus.OK).json({
          status: HttpStatus.OK,
          data: response,
        });
      })
      .catch((error: any) => {
        throw new UnprocessableEntityException(error.message);
      });
  }

  @Get('get-contents')
  async getContents(@Res() res: any, @Query() query: any): Promise<any> {
    return await this.commonService
      .getContents(query)
      .then(async (response) => {
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
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './public/profile',
        filename: (req, file, cb) => {
          const randomName = Array(32)
            .fill(null)
            .map(() => Math.round(Math.random() * 16).toString(16))
            .join('');
          return cb(null, `${randomName}${extname(file.originalname)}`);
        },
      }),
    }),
  )
  @Post('update-profile')
  async updateProfile(
    @Res() res: any,
    @Body() body: UpdateProfileDto,
    @Request() request,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<any> {
    if (file) {
      body.profile = {
        path: process.env.IMAGE_URL + file.path,
        filename: file.originalname,
        mimetype: file.mimetype,
      };
    }
    return await this.commonService
      .updateProfile(body, request.user._id)
      .then(async (response) => {
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
