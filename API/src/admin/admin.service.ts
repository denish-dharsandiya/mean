import { Injectable, BadRequestException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User, UserDocument } from '../common/schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { EmailService } from '../common/common services/email.service';
import { AuthService } from '../auth/auth.service';
import {
  NotificationDocument,
  Notification,
} from 'src/common/schema/notification.schema';
import { CommonService } from 'src/common/common.service';

const ObjectId = require('mongoose').Types.ObjectId;

@Injectable()
export class AdminService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
    private readonly emailService: EmailService,
    private readonly authService: AuthService,
    private readonly commonService: CommonService,

    @InjectModel(Notification.name)
    private notificationModel: Model<NotificationDocument>,
    ) {}

  async login(userInfo): Promise<{ token: string; user_data: User } | null> {
    try {
      const { email, password } = userInfo;
      let user = await this.authService.validateUser(email, password);

      if (!user)
        throw new Error('You have entered an invalid email or password');
      const jwt = await this.jwtService.signAsync({ user });
      return { token: jwt, user_data: user };
    } catch (err) {
      throw err;
    }
  }

  async sendForgotPasswordEmail(payload) {
    try {
      const email = payload.email;
      const user = await this.userModel.findOne({ email: payload.email });

      if (!user) {
        throw new Error('Entered email address is not found');
      }
      const token = await this.jwtService.signAsync({ user: user.toJSON() });

      const context: any = user;
      context.token = token;
      let response_message = '';
      this.emailService
        .userForgotPassword({ to: email, context: context, panel: 'admin' })
        .then()
        .catch(error => {
          throw new BadRequestException(error);
        });
      response_message = 'Reset password link sent on your email account';

      return response_message;
      // } else {
      //     throw new Error('User with this email does not exist in backend.');
      // }
    } catch (err) {
      throw err;
    }
  }

  async resetPassword(payload: any, userInfo: User) {
    try {
      // if (userInfo.user_type == User.admin) {
      let comparePassword = await this.authService.doesPasswordMatch(
        payload.password,
        userInfo.password,
      );

      if (comparePassword) {
        throw new Error('Sorry new password cannot be same as old password');
      }
      let newPassword = await this.authService.hashingPassword(
        payload.password,
      );
      await this.userModel.findOneAndUpdate(
        { userId: userInfo.userId },
        { password: newPassword },
      );

      return await this.userModel.findOne({ userId: userInfo.userId });
      // } else {
      //     throw new Error('User with this email does not exist in backend.');
      // }
    } catch (err) {
      throw err;
    }
  }

  

  async getNotificationAdmin(_id): Promise<any> {
    try {
      const getNotification = await this.notificationModel
        .find()
        .where({ to_user: _id })
        .sort({ created_at: 1 });
      if (getNotification.length > 0) {
        await this.notificationModel
          .updateMany({ is_read: 'read' })
          .where({ to_user: _id });
        return getNotification;
      } else {
        return [];
      }
    } catch (err) {
      throw err;
    }
  }

  

  async getProfile(_id) {
    try {
      const getAdmin = await this.userModel.findOne({ _id: _id });
      if (!getAdmin) throw new Error('Can not find Admin!!');

      return getAdmin;
    } catch (err) {
      throw err;
    }
  }

  async getDashboardInfo() {
    try {
      return 0;
    } catch (err) {
      throw err;
    }
  }
}