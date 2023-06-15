import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import mongoose, { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

enum Role {
  user,
  admin,
  doctor,
}

enum Type {
  online,
  in_person,
}

enum Gender {
  Male,
  Female,
}
@Schema()
export class User {
  @Prop()
  userId: string;

  @Prop()
  first_name: string;

  @Prop()
  last_name: string;

  @Prop({ type: String, enum: Role, required: true, default: 'user' })
  user_type: Role;

  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop({ default: false })
  status: boolean;

  @Prop({ type: Date, required: true })
  dob: Date;

  @Prop({ enum: Gender, type: String })
  gender: Gender;

  @Prop()
  phone: string;

  @Prop()
  designation: string;

  @Prop()
  about: string;

  @Prop({type:Number, default:null})
  OTP: number;

  @Prop({ type: Object })
  profile_pic: Object;

  @Prop({ type: Object })
  location: {
    zip_code: {type: string, required: true},
    country: { type: MongooseSchema.Types.ObjectId, ref: "Country"},
    state: {type: string, required: true},
    city: {type: string, required: true},
    address: {type: string, required: true},
    address_1: {type: string, required: true},
  };

  @Prop({ default: null })
  is_approve: boolean;

  @Prop()
  reason: string;

  @Prop({ type: String, enum: Type, default: 'in_person' })
  appointment: Type;

  @Prop()
  service: [object];

  @Prop()
  language: string;

  @Prop()
  specialty: string;

  @Prop({ required: true, default: null })
  npi_number: string;

  @Prop()
  google_id: string;

  @Prop()
  apple_id: string;

  @Prop()
  facebook_id: string;

  @Prop({ required: true })
  fcm_token: string;

  @Prop({ default: [] })
  education: [];

  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'Hospital', select: false },
  ])
  hospitals: [Object];

  @Prop()
  firebase_id: string;

  @Prop()
  awards: string;

  @Prop({
    type: Object,
    default: {
      helthcare_reminders: false,
      blog_newsletters: false,
      product_news: false,
      news_and_offers: false,
      future_marketing_emails: false,
    },
  })
  is_notify: {
    helthcare_reminders: boolean;
    blog_newsletters: boolean;
    product_news: boolean;
    news_and_offers: boolean;
    future_marketing_emails: boolean;
  };

  @Prop({ type: Object })
  time_slot: [];

  @Prop([
    {
      type: MongooseSchema.Types.ObjectId,
      ref: 'DocBeforeAfterPics',
      select: false,
    },
  ])
  doc_before_after_pics: [Object];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'Review', select: false }])
  reviews: [Object];

  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'Testimonial', select: false },
  ])
  testimonial: [Object];

  @Prop([
    { type: MongooseSchema.Types.ObjectId, ref: 'Insurance', select: false },
  ])
  insurance: [Object];

  @Prop([{ type: MongooseSchema.Types.ObjectId, ref: 'User' }])
  favourite_doctor: [Object];
  
  @Prop({ type: Object })
  treatment_reasons:[];

  @Prop({ default: null })
  role:string;
  
  @Prop({ default: false })
  is_join_now_request:boolean;

  @Prop({ type: Boolean , default: false })
  is_before_provider :boolean;

  @Prop({ type: Date, default: Date.now })
  created_at: Date;
}
export const UserSchema = SchemaFactory.createForClass(User);
      