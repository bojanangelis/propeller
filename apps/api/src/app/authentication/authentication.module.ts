import { Module } from '@nestjs/common'
import { AuthenticationService } from './authentication.service'
import { UserModule } from '../user/user.module'
import { AuthenticationResolver } from './authentication.resolver'
import { LocalStrategy } from '../guards/strategy/local.strategy'
import { JwtModule } from '@nestjs/jwt'
import { JwtStrategy } from '../guards/jwt-strategy'
import { PassportModule } from '@nestjs/passport'

@Module({
  imports: [
    PassportModule,
    UserModule,
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: Number(process.env.JWT_EXPIRES_SECONDS) }
    })
  ],

  providers: [AuthenticationResolver, AuthenticationService, LocalStrategy, JwtStrategy]
})
export class AuthenticationModule {}
