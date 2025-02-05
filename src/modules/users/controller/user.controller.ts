import { Body, Controller, Post } from '@nestjs/common'
import { SaveUserRequest } from '../request/user.request'
import { UserProvider } from '../provider'
import { UserReponse } from '../response/user.response'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Post('create')
  create(@Body() user: SaveUserRequest): Promise<UserReponse> {
    return this.provider.create.run(user)
  }
}
