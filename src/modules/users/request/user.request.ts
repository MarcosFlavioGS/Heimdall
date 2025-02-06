import { Transform, TransformFnParams } from 'class-transformer'
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from 'class-validator'

export class SaveUserRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly mail: string

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly phone: string
}

export class UpdateUserRequest {
  @IsString()
  @IsNotEmpty()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly name: string

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly mail: string

  @IsString()
  @IsNotEmpty()
  @IsPhoneNumber()
  @Transform(({ value }: TransformFnParams) => value?.trim())
  readonly phone: string
}
