import { Injectable, NotFoundException } from '@nestjs/common'
import { UserRepository } from '../repository/user.repository'

@Injectable()
export class DeleteUserProvider {
  constructor(private readonly repository: UserRepository) {}

  async run(id: string): Promise<void> {
    const { deletedCount: count } = await this.repository.remove({ _id: id })

    if (count === 0) {
      throw new NotFoundException()
    }
  }
}
