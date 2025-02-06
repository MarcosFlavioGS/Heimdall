import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({
  id: true,
  timestamps: { createdAt: 'create', updatedAt: 'update' },
  collection: 'User'
})
export class User {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  mail: string

  @Prop({ type: String, required: true })
  phone: string

  @Prop({ type: String, required: true })
  passHash: string
}

export const UserSchema = SchemaFactory.createForClass(User)
