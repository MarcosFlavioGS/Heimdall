import { Body, Controller, Post } from '@nestjs/common'
import { SignInRequest } from '../request/signIn.request'
import { AuthProvider } from '../provider'

@Controller('auth')
export class AuthController {
  constructor(private readonly provider: AuthProvider) {}

  @Post('signIn')
  signIn(@Body() request: SignInRequest) {
    return this.provider.signIn.run(request)
  }
}
