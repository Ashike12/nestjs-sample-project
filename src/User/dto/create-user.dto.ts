import {
    IsEmail,
    IsNotEmpty,
    IsString,
  } from 'class-validator';
  
  export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    readonly FirstName: string;
  
    @IsString()
    @IsNotEmpty()
    readonly LastName: string;
  
    @IsNotEmpty()
    @IsEmail({}, { message: 'Please enter correct email' })
    readonly Email: string;

    @IsString()
    @IsNotEmpty()
    readonly Phone: string;
  }
  