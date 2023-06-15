import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class VerificationDto {

    @ApiProperty()
    @IsNotEmpty({message: 'The id should not be empty'})
    id: string;
    
    @ApiProperty()
    @IsNotEmpty({message: 'The is_approve should not be empty'})
    is_approve: boolean;

    reason: string;

}