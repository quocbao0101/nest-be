import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, MinLength } from 'class-validator';


export class AuthenticationDTO {
    @IsEmail()
    @ApiProperty()
    email?: string;

    @ApiProperty()
    @MinLength(8, { message: 'This field must be than 8 character' })
    password?: string
}