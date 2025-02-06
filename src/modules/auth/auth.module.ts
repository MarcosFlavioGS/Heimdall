import { Module } from '@nestjs/common'
import { AuthController } from './controller/auth.controller'
import { UsersModule } from '../users/users.module'
import { AuthProvider } from './provider'
import { JwtModule } from '@nestjs/jwt'

@Module({
  imports: [JwtModule, UsersModule],
  providers: [AuthProvider],
  controllers: [AuthController]
})
export class AuthModule {}
