import { Injectable } from '@nestjs/common'
import { CreateUserProvider } from './create.user.provider'
import { UserRepository } from '../repository/user.repository'
import { GetUserProvider } from './get.user.provider'
import { DeleteUserProvider } from './delete.user.provider'
import { PatchUserProvider } from './patch.user.provider'

@Injectable()
export class UserProvider {
  readonly create: CreateUserProvider
  readonly get: GetUserProvider
  readonly update: PatchUserProvider
  readonly delete: DeleteUserProvider

  constructor(readonly repository: UserRepository) {
    this.create = new CreateUserProvider(this.repository)
    this.get = new GetUserProvider(this.repository)
    this.update = new PatchUserProvider(this.repository)
    this.delete = new DeleteUserProvider(this.repository)
  }
}
