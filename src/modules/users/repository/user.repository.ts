import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './user.schema'
import { Model } from 'mongoose'
import { CreateUser } from './create.user.model'

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  save(user: CreateUser): Promise<UserDocument> {
    return this.model.create(user)
  }
}
