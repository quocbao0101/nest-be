import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
// import { UserDTO } from "src/dto/user.dto";
// import { User } from "src/models/user";
import { InjectRepository } from "@nestjs/typeorm";
import { UserDTO } from "src/dto/user.dto";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

    getUser() {
      return this.userRepository.find();
    }

    createUser(data: UserDTO) {
      return this.userRepository.save(data);
    }

    // async getDetailUser(_id: number): Promise<User> {
    //   const user = this.users.find((item) => item.id === Number(_id));
    //   if (!user) {
    //     throw new Error('User not found');
    //   }

    //   const payload = { sub: user.id, username: user.access_token };
    //   user.access_token = await this.jwtService.signAsync(payload);
    //   return user;
    // }


    // updateUser(userRequest: UserDTO, id: number): User {
    //   const user = this.users.find((item) => item.id === Number(id));
    //   if (user) {
    //     user.email = userRequest.email;
    //     user.full_name = userRequest.full_name;
    //     user.password = userRequest.password;
    //   }
    //   return user;
    // }

    // deleteUser(id: number): boolean {
    //   const index = this.users.findIndex((item) => item.id === Number(id));
    //   if (index !== -1) {
    //     this.users.splice(index, 1);
    //     return true;
    //   }
    //   return false;
    // }
}