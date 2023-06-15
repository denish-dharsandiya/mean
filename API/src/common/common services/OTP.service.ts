import { Injectable } from '@nestjs/common';
@Injectable()

export class OTPService {

    public async generateotp(): Promise<any> {

        var digits = '1234567890';
        var otp = ''
        for (let i = 0; i < 6; i++) {
            otp += digits[Math.floor(Math.random() * 10)];
        }
        return otp;
    }
    
}