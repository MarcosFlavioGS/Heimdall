import { Injectable } from '@nestjs/common'
import { CreateUserProvider } from './create.user.provider'
import { UserRepository } from '../repository/user.repository'
import { GetUserProvider } from './get.user.provider'
import { DeleteUserProvider } from './delete.user.provider'
import { PatchUserProvider } from './patch.user.provider'

@Injectable()
export class UserProvider {
  constructor(readonly repository: UserRepository) {}

  readonly create: CreateUserProvider = new CreateUserProvider(this.repository)
  readonly get: GetUserProvider = new GetUserProvider(this.repository)
  readonly update: PatchUserProvider = new PatchUserProvider(this.repository)
  readonly delete: DeleteUserProvider = new DeleteUserProvider(this.repository)
}
