import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'supersecret', // Using same secret as auth service
    });
  }

  async validate(payload: { sub: number; email: string }) {
    console.log('✅ JWT payload validated:', payload);
    return { id: payload.sub, email: payload.email };
  }
}
