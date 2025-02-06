import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common'
import { SaveUserRequest, UpdateUserRequest } from '../request/user.request'
import { UserProvider } from '../provider'
import { UserResponse } from '../response/user.response'

@Controller('user')
export class UserController {
  constructor(private readonly provider: UserProvider) {}

  @Post('create')
  create(@Body() request: SaveUserRequest): Promise<UserResponse> {
    return this.provider.create.run(request)
  }

  @Get(':id')
  get(@Param('id') id: string): Promise<UserResponse> {
    return this.provider.get.run(id)
  }

  @Patch('update/:id')
  patch(@Param('id') id: string, @Body() request: UpdateUserRequest): Promise<UserResponse> {
    return this.provider.update.run(id, request)
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<void> {
    return this.provider.delete.run(id)
  }
}
