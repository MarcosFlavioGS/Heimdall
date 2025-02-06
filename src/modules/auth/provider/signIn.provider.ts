import { UserRepository } from '@/modules/users/repository/user.repository'
import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common'
import { SignInRequest } from '../request/signIn.request'
import { UserDocument } from '@/modules/users/repository/user.schema'

import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'
import { TokenResponse } from '../response/token.response'

@Injectable()
export class SignInProvider {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly config: ConfigService
  ) {}

  async run(request: SignInRequest): Promise<TokenResponse> {
    const user: UserDocument = await this.userRepository.find({ name: request.name })

    if (!user) {
      throw new NotFoundException()
    }

    if (!(await bcrypt.compare(request.pass, user?.passHash))) {
      throw new UnauthorizedException()
    }

    const payload = { sub: user.id, username: user.name }

    const token = await this.jwtService.signAsync(payload, {
      secret: this.config.get<string>('TOKEN_SECRET'),
      expiresIn: this.config.get<number>('TOKEN_EXPIRE')
    })

    return { token }
  }
}
