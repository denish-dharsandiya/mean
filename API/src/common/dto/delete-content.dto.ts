import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class DeleteContentDto {

    @ApiProperty()
    @IsNotEmpty({message: 'The content_id should not be empty'})
    content_id: string;
   
}