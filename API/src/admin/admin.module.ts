import { Module } from "@nestjs/common";
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from '../common/schema/user.schema';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { EmailService } from '../common/common services/email.service';
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from '../auth/auth.service';
import { UserModule } from "src/users/user.module";
import { JwtGuard } from "src/auth/guards/jwt.guard";
import { JwtStrategy } from "src/auth/guards/jwt.strategy";
import { NotificationSchema, Notification } from "src/common/schema/notification.schema";
import { CommonService } from "src/common/common.service";
import { Content, ContentSchema } from "src/common/schema/content.schema";
import { Pages, PagesSchema } from "src/common/schema/pages.schema";
import { Service, ServiceSchema } from "src/common/schema/service.schema";
@Module({
    imports: [UserModule, MongooseModule.forFeature([
        { name: User.name, schema: UserSchema }, 
        { name: Notification.name, schema: NotificationSchema },
        { name: Content.name, schema: ContentSchema},
        { name: Pages.name, schema: PagesSchema},
        { name: Service.name, schema: ServiceSchema}
        

    ]),
        JwtModule.registerAsync({
            useFactory: () => ({
                secret: 'secret',
                signOptions: { expiresIn: '3600s' }
            })
        }),],
    controllers: [AdminController],
    providers: [JwtGuard, JwtStrategy, AdminService, EmailService, AuthService, CommonService],
})

export class AdminModule { }