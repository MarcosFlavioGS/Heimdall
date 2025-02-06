import { Injectable, NotFoundException } from '@nestjs/common'
import { UserResponse } from '../response/user.response'
import { UserDocument } from '../repository/user.schema'
import { UserRepository } from '../repository/user.repository'
import { isNil } from 'lodash'

@Injectable()
export class GetUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<UserResponse> {
    const user: UserDocument = await this.repository.find({ _id: id })

    if (isNil(user)) {
      throw new NotFoundException('post not found')
    } else {
      return new UserResponse(user)
    }
  }
}
