import { Module } from '@nestjs/common'
import { UserController } from './controller/user.controller'
import { UserProvider } from './provider'

@Module({
  providers: [UserProvider],
  controllers: [UserController]
})
export class UsersModule {}
