import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import mongoose, { Document } from "mongoose";

export type PagesDocument = Pages & Document;

@Schema()
export class Pages {

    @Prop()
    name: string;

    @Prop()
    slug: string;

    @Prop()
    content: string;

    @Prop({ type: Date, default: Date.now })
    created_at: Date;

}
export const PagesSchema = SchemaFactory.createForClass(Pages);