import { MailerService } from '@nest-modules/mailer';
import { Injectable } from '@nestjs/common';
@Injectable()
export class EmailService {

    constructor(private readonly mailerService: MailerService) {

    }
    public async userForgotPassword(data: any = {}): Promise<any> {

        data = Object.assign({}, data);
        const url = 'reset-password/' + data.context.token;
        if(data.panel == "admin"){
            data.context.reset_password_url = this.baseUrlAdmin(url);
        }else{
            data.context.reset_password_url = this.baseUrlWeb(url);
        }

        return this.mailerService.sendMail({
            to: data.to, //List of receivers
            subject: 'Forgot Password - ' + process.env.APP_NAME, //Subject line
            template: 'user-reset-password',
            context: {
                settings: { APP_NAME: process.env.APP_NAME },
                data: data.context,

                year: new Date().getFullYear(),
            },

        }).catch(err => console.log("ERROR ", err));

    }

    public async notifyMe(data: any = {}): Promise<any> {

        data = Object.assign({}, data);

        return this.mailerService.sendMail({
            to: data.to, //List of receivers
            subject: 'Availability Notification' + process.env.APP_NAME, //Subject line
            template: 'notifyMe',
            context: {
                settings: { APP_NAME: process.env.APP_NAME },
                data: data.context,
                year: new Date().getFullYear(),
            },
        }).catch(err => console.log("ERROR ", err));
    }

    public baseUrlAdmin(path?: string) {
        let app_url = process.env.FRONTEND_URL + ':' + process.env.FRONTEND_PORT;
        if (path) {
            app_url += `/${path}`;
        }
        return app_url;
    }

    public baseUrlWeb(path?: string) {
        let app_url = process.env.FRONTEND_URL + ':3301';
        if (path) {
            app_url += `/${path}`;
        }
        return app_url;
    }
}