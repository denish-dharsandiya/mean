import { Controller, Get,UseGuards } from '@nestjs/common';
import { UsersService } from './user.service';
import { JwtGuard } from '../auth/guards/jwt.guard';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    
    @UseGuards(JwtGuard)
    @Get()
    async getUsers() {
        return this.usersService.getUsers();
    }

}