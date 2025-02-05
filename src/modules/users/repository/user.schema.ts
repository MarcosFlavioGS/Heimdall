import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'

import { HydratedDocument, Types } from 'mongoose'

export type UserDocument = HydratedDocument<User>

@Schema({
  id: true,
  timestamps: { createdAt: 'create', updatedAt: 'update' },
  collection: 'Post'
})
export class User {
  @Prop({ type: String, required: true })
  name: string

  @Prop({ type: String, required: true })
  mail: string

  @Prop({ type: String, required: true })
  phone: string
}

export const UserSchema = SchemaFactory.createForClass(User)
