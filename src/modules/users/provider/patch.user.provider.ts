import { Injectable, InternalServerErrorException } from '@nestjs/common'
import { UpdateUserRequest } from '../request/user.request'
import { UserResponse } from '../response/user.response'
import { UserDocument } from '../repository/user.schema'
import { UserRepository } from '../repository/user.repository'
import { UpdateUser } from '../repository/update.user.request'

@Injectable()
export class PatchUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string, request: UpdateUserRequest): Promise<UserResponse> {
    try {
      const user: UserDocument = await this.repository.patch({ _id: id }, new UpdateUser(request))

      return new UserResponse(user)
    } catch (e) {
      throw new InternalServerErrorException(e)
    }
  }
}
