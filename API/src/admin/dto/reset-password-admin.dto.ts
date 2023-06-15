import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';

export class ResetPasswordDtoAdmin {

    @ApiProperty()
    @IsNotEmpty({message: 'The password should not be empty'})
    password: string;
    
}