import {
    Body,
    Controller,
    HttpCode,
    Post,
    Req,
  } from '@nestjs/common';
import { UserCreateService } from './services/user-create.service';
import { CreateUserDto } from './dto/create-user.dto';
  
  @Controller('user')
  export class UserController {
    constructor(private userService: UserCreateService) {}
  
    @Post('createUser')
    @HttpCode(200)
    async createCustomer(
      @Body()
      userDto: CreateUserDto,
    ): Promise<any> {
      return this.userService.createUser(userDto);
    }
  }
  