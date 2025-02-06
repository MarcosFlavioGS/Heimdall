import { IsNotEmpty, IsString } from 'class-validator'

export class SignInRequest {
  @IsString()
  @IsNotEmpty()
  readonly name: string

  @IsString()
  @IsNotEmpty()
  readonly pass: string
}
