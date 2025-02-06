import { UserDocument } from '../repository/user.schema'

export class UserResponse {
  readonly id: string
  readonly name: string
  readonly mail: string
  readonly phone: string

  constructor(user: UserDocument) {
    this.id = user.id
    this.name = user.name
    this.mail = user.mail
    this.phone = user.phone
  }
}
