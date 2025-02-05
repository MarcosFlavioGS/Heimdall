import { Body, Controller, Post } from '@nestjs/common'
import { SaveUserRequest } from '../request/user.request'
import { UserProvider } from '../provider'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Post('create')
  create(@Body() user: SaveUserRequest) {
    console.log(user)

    return this.provider.create.run(user)
  }
}
