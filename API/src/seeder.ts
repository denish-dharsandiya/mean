import { seeder } from "nestjs-seeder";
import { MongooseModule } from "@nestjs/mongoose";
import { ContentSchema, Content } from "src/common/schema/content.schema";
import { ContentSeeder } from "./seeder/contents.seeder";

seeder({
  imports: [
    MongooseModule.forRoot('mongodb+srv://techticdenish:wcJIDXxiyjlVvVLo@cluster0.qeahxx4.mongodb.net/mean'),
    MongooseModule.forFeature([
      { name: Content.name, schema: ContentSchema }
    ]),
  ],
}).run([ContentSeeder]);