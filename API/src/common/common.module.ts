import { Module } from '@nestjs/common';
import { CommomController } from './common.controller';
import { CommonService } from './common.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Content, ContentSchema } from './schema/content.schema';
import { NotificationSchema, Notification } from './schema/notification.schema';
import { UserSchema, User } from './schema/user.schema';
import { AuthService } from 'src/auth/auth.service';
import { JwtStrategy } from 'src/auth/guards/jwt.strategy';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { JwtModule } from '@nestjs/jwt';
import { EmailService } from './common services/email.service';
import { Pages, PagesSchema } from './schema/pages.schema';
import { Service, ServiceSchema } from './schema/service.schema';

@Module({
  imports: [MongooseModule.forFeature([
    { name: Content.name, schema: ContentSchema }, 
    { name: Notification.name, schema: NotificationSchema },
    { name: User.name, schema: UserSchema },
    { name: Pages.name, schema: PagesSchema},
    { name: Service.name, schema: ServiceSchema}
  ]),JwtModule.registerAsync({
    useFactory: () => ({
        secret: 'secret',
        signOptions: { expiresIn: '3600s' }
    })
}),
],
  controllers: [CommomController],
  providers: [CommonService, AuthService, JwtGuard, JwtStrategy, EmailService],
})
export class CommonModule { }
