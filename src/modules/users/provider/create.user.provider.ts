import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { SaveUserRequest } from '../request/user.request'
import { UserRepository } from '../repository/user.repository'
import { CreateUser } from '../repository/create.user.model'
import { UserResponse } from '../response/user.response'
import { UserDocument } from '../repository/user.schema'

import * as bcrypt from 'bcrypt'

@Injectable()
export class CreateUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(request: SaveUserRequest): Promise<UserResponse> {
    const salt = await bcrypt.genSalt()

    const passHash = await bcrypt.hash(request.pass, salt)

    try {
      const user: UserDocument = await this.repository.save(new CreateUser({ ...request, pass: passHash }))

      return new UserResponse(user)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
