import { ApiProperty } from '@nestjs/swagger';

export class UpdateProfileDto {

    @ApiProperty()
    first_name: string;
    
    @ApiProperty()
    last_name: string;
    
    @ApiProperty()
    email: string;

    @ApiProperty()
    dob: string;
    
    @ApiProperty()
    gender: string;

    @ApiProperty()
    phone: string;
    
    @ApiProperty()
    profile: object;

    @ApiProperty()
    location: object;

}