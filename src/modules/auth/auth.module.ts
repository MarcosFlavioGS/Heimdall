import { Module } from '@nestjs/common'
import { AuthController } from './controller/auth.controller'
import { UsersModule } from '../users/users.module'
import { AuthProvider } from './provider'

@Module({
  imports: [UsersModule],
  providers: [AuthProvider],
  controllers: [AuthController]
})
export class AuthModule {}
