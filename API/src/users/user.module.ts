import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../common/schema/user.schema';
import { UsersController } from './user.controller';
import { UsersService } from './user.service';
import { UserRepository } from './users.repository';


@Module({
    imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
    controllers: [UsersController],
    providers: [UsersService, UserRepository],
    exports: [UsersService],

})

export class UserModule { }