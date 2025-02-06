import { UserRepository } from '@/modules/users/repository/user.repository'
import { Injectable } from '@nestjs/common'
import { SignInProvider } from './signIn.provider'

@Injectable()
export class AuthProvider {
  constructor(private readonly userRepository: UserRepository) {}

  readonly signIn: SignInProvider = new SignInProvider(this.userRepository)
}
