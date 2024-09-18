import { Body, Controller, HttpCode, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { AuthenticationService } from "./authen.service";
import { AuthenticationDTO } from "src/dto/authen.dto";
import { ResponseData } from "src/global/globalClass";
import { HttpMessage } from "src/global/globalEnum";
import { User } from "src/models/user";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";

@Controller("authentication")
@ApiBearerAuth()
@ApiTags('Authentication')
export class AuthenticationController {
    constructor(private readonly authenticationService: AuthenticationService) {

    }

    @HttpCode(HttpStatus.OK)
    @Post()
    async singIn(@Body(new ValidationPipe) authenticationRequest: AuthenticationDTO): Promise<ResponseData<User>> {
        try {
            return new ResponseData<User>(await this.authenticationService.signIn(authenticationRequest), HttpStatus.OK, HttpMessage.SUCCESS);
        } catch (error) {
            return new ResponseData<User>(error, HttpStatus.BAD_REQUEST, HttpMessage.ERROR);
        }
    }
}