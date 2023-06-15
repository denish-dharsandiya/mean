import { IsNotEmpty, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAdminDto {
    @ApiProperty()
    @IsNotEmpty({ message: 'The first name should not be empty'})
    first_name: string;
    
    @ApiProperty()
    @IsNotEmpty({ message: 'The last name should not be empty'})
    last_name: string;
    
    @ApiProperty()
    @IsNotEmpty({message: 'The email should not be empty'})
    email: string;
    
    @MaxLength(15)
    @MinLength(6)
    @ApiProperty()
    @IsNotEmpty({message: 'The password should not be empty'})
    password: string;

    @ApiProperty()
    @IsNotEmpty({message: 'The dob should not be empty'})
    dob: string;
    
    @ApiProperty()
    @IsNotEmpty({message: 'The gender should not be empty'})
    gender: string;

}