import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";
import { Factory } from "nestjs-seeder";


export type ContentDocument = Content & Document;

@Schema()
export class Content {

    @Factory(faker => faker.name.fullName())
    @Prop()
    title: string;

    @Factory(faker => faker.name.fullName())
    @Prop()
    description: string;

    @Prop({ type: Date, default: Date.now })
    created_at: Date;

}
export const ContentSchema = SchemaFactory.createForClass(Content);


