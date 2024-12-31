import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  timestamps: true,
})
export class User {

  @Prop()
  FirstName: string;

  @Prop()
  LastName: string;

  @Prop()
  DisplayName: string;

  @Prop()
  Email: string;

  @Prop()
  Phone: string;

}

export const UserSchema = SchemaFactory.createForClass(User);
