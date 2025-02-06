import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { User, UserDocument } from './user.schema'
import { FilterQuery, Model, mongo } from 'mongoose'
import { CreateUser } from './create.user.model'
import { UpdateUser } from './update.user.request'

@Injectable()
export class UserRepository {
  constructor(@InjectModel(User.name) private model: Model<User>) {}

  save(user: CreateUser): Promise<UserDocument> {
    return this.model.create(user)
  }

  find(query: FilterQuery<User>): Promise<UserDocument> {
    return this.model.findOne(query).exec()
  }

  patch(query: FilterQuery<User>, user: UpdateUser): Promise<UserDocument> {
    return this.model.findOneAndUpdate(query, user).exec()
  }

  remove(query: FilterQuery<User>): Promise<mongo.DeleteResult> {
    return this.model.deleteOne(query).exec()
  }
}
