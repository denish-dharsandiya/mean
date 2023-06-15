import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

export class changePasswordDtoAdmin {

    @ApiProperty()
    @MaxLength(15)
    @MinLength(6)
    @IsNotEmpty({message: 'The old password should not be empty'})
    oldPassword: string;
   
    @MaxLength(15)
    @MinLength(6)
    @ApiProperty()
    @IsNotEmpty({message: 'The new password should not be empty'})
    newPassword: string;

    @MaxLength(15)
    @MinLength(6)
    @ApiProperty()
    @IsNotEmpty({message: 'The conform password should not be empty'})
    conformPassword: string;
    
}