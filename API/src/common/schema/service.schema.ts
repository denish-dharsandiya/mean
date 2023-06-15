import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { Document ,Schema as MongooseSchema} from "mongoose";
import { ObjectId } from "bson";

export type ServiceDocument = Service & Document;

@Schema()
export class Service {

    @Prop({required: true, type: MongooseSchema.Types.ObjectId, ref: 'User' })
    doctor_id: ObjectId;

    @Prop({required: true})
    title: string;

    @Prop({required: true})
    price: string;

    @Prop({required: true})
    duration: string;

    @Prop()
    discount: string;

    @Prop({ type: Object })
    image: Object;

    @Prop({type: Date, default: Date.now})
    created_at: Date;

}
export const ServiceSchema = SchemaFactory.createForClass(Service);


