import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "../dto/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User } from "../Schemas/user.schema";
import mongoose from "mongoose";

@Injectable()
export class UserCreateService {

    constructor(
        @InjectModel(User.name)
        private userModel: mongoose.Model<User>,
    ) { }

    async createUser(dto: CreateUserDto) {
        const displayName = dto.FirstName + ' ' + dto.LastName;
        const userModel = {
            FirstName: dto.FirstName,
            LastName: dto.LastName,
            DisplayName: displayName,
            Email: dto.Email
        }
        await this.userModel.create(userModel);
    }

    getUid(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}