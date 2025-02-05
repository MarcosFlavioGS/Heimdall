import { Module } from '@nestjs/common'
import { UserController } from './controller/user.controller'
import { UserProvider } from './provider'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './repository/user.schema'
import { UserRepository } from './repository/user.repository'

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  providers: [UserProvider, UserRepository],
  controllers: [UserController]
})
export class UsersModule {}
