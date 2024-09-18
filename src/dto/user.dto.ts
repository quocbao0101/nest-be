import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength } from 'class-validator';


export class UserDTO {
    @ApiProperty()
    full_name?: string;

    @IsEmail()
    @ApiProperty()
    email?: string;

    @MinLength(8, { message: 'This field must be than 8 character' })
    @ApiProperty()
    password?: string
}