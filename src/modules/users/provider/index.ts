import { Injectable } from '@nestjs/common'
import { CreateUserProvider } from './create.user.provider'
import { UserRepository } from '../repository/user.repository'

@Injectable()
export class UserProvider {
  constructor(readonly repository: UserRepository) {}

  readonly create: CreateUserProvider = new CreateUserProvider(this.repository)
}
