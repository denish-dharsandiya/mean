import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class EmailDTOAdmin {

    @ApiProperty()
    @IsNotEmpty({message: 'The email should not be empty'})
    email: string;
    
}