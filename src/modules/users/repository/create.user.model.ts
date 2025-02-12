import { SaveUserRequest } from '../request/user.request'

export class CreateUser {
  readonly name: string
  readonly mail: string
  readonly phone: string
  readonly passHash: string

  constructor(user: SaveUserRequest) {
    this.name = user.name
    this.mail = user.mail
    this.phone = user.phone
    this.passHash = user.pass
  }
}
