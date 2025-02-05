import { Injectable } from '@nestjs/common'
import { SaveUserRequest } from '../request/user.request'

@Injectable()
export class CreateUserProvider {
  constructor() {}

  async run(user: SaveUserRequest): Promise<void> {
    console.log(user)
  }
}
