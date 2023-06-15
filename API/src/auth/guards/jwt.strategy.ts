import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({    
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: 'secret',
            passReqToCallback: true
        });
    }
    async validate(req: Request,payload: any) {
      
        if(req.url.includes('/api/admin/') && payload.user.user_type != 'admin') 
        throw new UnauthorizedException({statusCode:401,message:"Only admin can access this!!"})
        
        return { ...payload.user };
    }
}