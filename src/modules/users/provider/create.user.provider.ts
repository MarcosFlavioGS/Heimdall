import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { SaveUserRequest } from '../request/user.request'
import { UserRepository } from '../repository/user.repository'
import { CreateUser } from '../repository/create.user.model'
import { UserResponse } from '../response/user.response'

@Injectable()
export class CreateUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(user: SaveUserRequest): Promise<UserResponse> {
    try {
      const post = await this.repository.save(new CreateUser(user))

      return new UserResponse(post)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
