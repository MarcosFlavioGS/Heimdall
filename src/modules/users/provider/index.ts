import { Injectable } from '@nestjs/common'
import { CreateUserProvider } from './create.user.provider'

@Injectable()
export class UserProvider {
  constructor() {}

  readonly create: CreateUserProvider = new CreateUserProvider()
}
