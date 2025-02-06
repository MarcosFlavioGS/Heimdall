import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common'
import { SaveUserRequest } from '../request/user.request'
import { UserProvider } from '../provider'
import { UserResponse } from '../response/user.response'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Post('create')
  create(@Body() user: SaveUserRequest): Promise<UserResponse> {
    return this.provider.create.run(user)
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<UserResponse> {
    return this.provider.get.run(id)
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.provider.delete.run(id)
  }
}
