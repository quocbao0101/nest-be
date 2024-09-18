import {  Body, Controller, Get, HttpCode, HttpStatus, Post, ValidationPipe } from "@nestjs/common";
import { UserService } from "./user.service";
import { ResponseData } from "src/global/globalClass";
import { User } from "src/models/user";
import { UserDTO } from "src/dto/user.dto";
import { HttpMessage } from "src/global/globalEnum";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";



@Controller("user")
@ApiBearerAuth()
@ApiTags('User')
export class UserController {
  constructor(private readonly userService: UserService) {

  }

  @Get()
  async getUser(): Promise<ResponseData<User>> {
    try {
      const user = await this.userService.getUser(); // Ensure to await if it's an async operation
      return new ResponseData<User>(user, HttpStatus.OK, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<User>(null, HttpStatus.BAD_REQUEST, HttpMessage.ERROR);
    }
  }

  @HttpCode(HttpStatus.OK)
  @Post()
  async postUser(@Body(new ValidationPipe) userRequest: UserDTO): Promise<ResponseData<User>> {
    try {
      return new ResponseData<User>(await this.userService.createUser(userRequest), HttpStatus.OK, HttpMessage.SUCCESS);
    } catch (error) {
      return new ResponseData<User>(null, HttpStatus.BAD_REQUEST, HttpMessage.ERROR);
    }
  }

  // @Get('/:id')
  // async getDetailUser(@Param('id') id: number): Promise<ResponseData<User>> {
  //   try {
  //     return new ResponseData<User>(await this.userService.getDetailUser(id), HttpStatus.OK, HttpMessage.SUCCESS);
  //   } catch (error) {
  //     return new ResponseData<User>(null, HttpStatus.BAD_REQUEST, HttpMessage.ERROR);
  //   }
  // }

  // @Put('/:id')
  // updateUser(@Param('id') id: number, @Body() userRequest: UserDTO): ResponseData<User> {
  //   console.log('ID:', id)
  //   try {
  //     return new ResponseData<User>(this.userService.updateUser(userRequest, id), HttpStatus.OK, HttpMessage.SUCCESS);
  //   } catch (error) {
  //     return new ResponseData<User>(null, HttpStatus.BAD_REQUEST, HttpMessage.ERROR);
  //   }
  // }

  // @Delete('/:id')
  // deleteUser(@Param('id') id: number): ResponseData<boolean> {
  //   try {
  //     return new ResponseData<boolean>(this.userService.deleteUser(id), HttpStatus.OK, HttpMessage.SUCCESS);
  //   } catch (error) {
  //     return new ResponseData<boolean>(null, HttpStatus.BAD_REQUEST, HttpMessage.ERROR);
  //   }
  // }
}
