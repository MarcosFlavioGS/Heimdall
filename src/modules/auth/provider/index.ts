import { UserRepository } from '@/modules/users/repository/user.repository'
import { Injectable } from '@nestjs/common'
import { SignInProvider } from './signIn.provider'

import { JwtService } from '@nestjs/jwt'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class AuthProvider {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtServic: JwtService,
    private readonly config: ConfigService
  ) {}

  readonly signIn: SignInProvider = new SignInProvider(this.userRepository, this.jwtServic, this.config)
}
