import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserDocument } from '../common/schema/user.schema';
import { Model } from 'mongoose';
import { UserRepository } from './users.repository';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private readonly usersRepository: UserRepository
    ) { }

    async getUsers(): Promise<User[]> {
        return this.usersRepository.find({});
    }

}