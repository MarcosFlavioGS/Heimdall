import { UserRepository } from '@/modules/users/repository/user.repository'
import { Injectable, UnauthorizedException } from '@nestjs/common'
import { SignInRequest } from '../request/signIn.request'
import { UserDocument } from '@/modules/users/repository/user.schema'

import * as bcrypt from 'bcrypt'

@Injectable()
export class SignInProvider {
  constructor(private readonly userRepository: UserRepository) {}

  async run(request: SignInRequest) {
    const user: UserDocument = await this.userRepository.find({ name: request.name })

    if (!(await bcrypt.compare(request.pass, user?.passHash))) {
      throw new UnauthorizedException()
    }

    const { passHash, ...result } = user

    //TODO: Generate JWT to return

    return result
  }
}
