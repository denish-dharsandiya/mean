import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from "src/users/user.module";
import { AuthController } from "./auth.controller";
import { AuthService } from './auth.service';
import { User, UserSchema } from '../common/schema/user.schema';
import { JwtModule } from "@nestjs/jwt";
import { JwtGuard } from './guards/jwt.guard';
import { JwtStrategy } from './guards/jwt.strategy';
import { EmailService } from '../common/common services/email.service';
@Module({
    imports: [UserModule, MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: 'secret',
                signOptions: { expiresIn: '3600s' }
            })
        })],
    controllers: [AuthController],
    providers: [AuthService, JwtGuard, JwtStrategy, EmailService]
})

export class AuthModule { }