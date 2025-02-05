import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { SaveUserRequest } from '../request/user.request'
import { UserRepository } from '../repository/user.repository'
import { CreateUser } from '../repository/create.user.model'
import { UserReponse } from '../response/user.response'

@Injectable()
export class CreateUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(user: SaveUserRequest): Promise<UserReponse> {
    try {
      const post = await this.repository.save(new CreateUser(user))

      return new UserReponse(post)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
