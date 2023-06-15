import { Injectable, BadRequestException } from '@nestjs/common';
import * as bycrpt from 'bcrypt';
import { User, UserDocument } from '../common/schema/user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { JwtService } from '@nestjs/jwt';
import { EmailService } from '../common/common services/email.service';
@Injectable()
export class AuthService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly jwtService: JwtService,
        private readonly emailService: EmailService
    ) { }

    async hashingPassword(password: string) {
        return bycrpt.hash(password, 12);
    }

    async register(user): Promise<User | any> {
        try {
            const { email, password } = user;
            let existingUser = await this.userModel.findOne({ email: email });
            if (existingUser) throw new Error('User with this email already registered.');
            const hashedPassword = await this.hashingPassword(password);
            user.password = hashedPassword;
            user.userId = uuidv4();
            user.dob = new Date(user.dob);
            user.user_type = 'admin';
            return await new this.userModel(user).save();
        } catch (err) {
            throw err;
        }

    }

    async doesPasswordMatch(password: string, hashedPassword: string): Promise<boolean> {

        return bycrpt.compare(password, hashedPassword);
    }
    
    async validateUser(email: string, password: string): Promise<UserDocument | null> {
        let userExist = await this.userModel.findOne({ email: email, user_type: 'admin' });
        if (!userExist) return null;

        const pwdMatch = await this.doesPasswordMatch(password, userExist.password);

        if (!pwdMatch) return null;

        return userExist;

    }

    async sendForgotPasswordMail(email) {
        try {
          
            const user = await this.userModel.findOne({ email:email });
            if (!user) {
                throw new Error('Entered email address is not found');
            }

            const token = await this.jwtService.signAsync({ user });

            const context: any = user;
            context.token = token;
            let response_message = '';
            this.emailService
                .userForgotPassword({ to: email, context: context ,panel:"web" })
                .then()
                .catch((error) => {
                    throw new BadRequestException(error);
                });
            response_message = 'Reset password link sent on your email account';
            return response_message;
        } catch (err) {
            throw err;
        }
    }
    async resetPassword(payload: any, userInfo: User) {
        try {
            let comparePassword = await this.doesPasswordMatch(payload.password, userInfo.password);

            if (comparePassword) {
                throw new Error("Sorry new password cannot be same as old password");
            }
            let newPassword = await this.hashingPassword(payload.password);
            await this.userModel.findOneAndUpdate({ userId: userInfo.userId }, { password: newPassword });

            return await this.userModel.findOne({ userId: userInfo.userId });

        } catch (err) {
            throw err;
        }
    }
    async login(userInfo): Promise<{ token: string, user_data: User } | null> {
        try {
            const { email, password } = userInfo;
            let user = await this.validateUser(email, password);

            if (!user) throw new Error('You have entered an invalid email or password');
            const jwt = await this.jwtService.signAsync({ user });
            return { token: jwt, user_data: user };
        } catch (err) {
            throw err;
        }
    }

}
