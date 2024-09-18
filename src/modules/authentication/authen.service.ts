import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { InjectRepository } from "@nestjs/typeorm";
import { AuthenticationDTO } from "src/dto/authen.dto";
import { UserEntity } from "src/entities/user.entity";
import { Repository } from "typeorm";

@Injectable()
export class AuthenticationService {
  constructor(
    @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>,
    private jwtService: JwtService,
  ) {}

  signIn(authenticationRequest: AuthenticationDTO) {
    const user = this.userRepository.findOne({
        where: {
            email: authenticationRequest.email,
            password: authenticationRequest.password,
        }
    });

    if (!user) {
        throw new Error('Email or password is incorrect.');
    }

    return user;
  }
}