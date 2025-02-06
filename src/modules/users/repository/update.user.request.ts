import { UpdateUserRequest } from '../request/user.request'

export class UpdateUser {
  readonly name: string
  readonly mail: string
  readonly phone: string

  constructor(user: UpdateUserRequest) {
    this.name = user.name
    this.mail = user.mail
    this.phone = user.phone
  }
}
