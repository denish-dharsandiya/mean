import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { Document , Types, Schema as MongooseSchema} from "mongoose";

export type NotificationDocument = Notification & Document;

enum isRead  {
    read,
    unread
}

enum isFor  {
    admin,
    doctor,
    user
}

@Schema()
export class Notification {

    @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'User' })
    to_user: Types.ObjectId;

    @Prop({ type: MongooseSchema.Types.ObjectId , ref: 'User' })
    from_user: Types.ObjectId;

    @Prop()
    type: string;

    @Prop()
    message: string;

    @Prop({ type: String, enum: isRead, required: true, default: isRead.unread})
    is_read: isRead;

    @Prop({ type: String, enum: isFor, required: true, default: isFor.user})
    is_for: isFor;

    @Prop({type: Date, default: Date.now})
    created_at: Date;
}
export const NotificationSchema = SchemaFactory.createForClass(Notification);
