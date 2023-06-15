import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class ContentDto {

    @ApiProperty()
    @IsNotEmpty({message: 'The name should not be empty'})
    name: string;
   
  
    @ApiProperty()
    @IsNotEmpty({message: 'The content should not be empty'})
    content: string;

    content_id: string;
    
}