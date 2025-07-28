import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Workspace)
    private readonly workspaceRepository: Repository<Workspace>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    const workspace = this.workspaceRepository.create({
      name: createUserDto.name,
    });
    await this.workspaceRepository.save(workspace);

    const user = this.userRepository.create(createUserDto);
    workspace.user = user;
    user.workspace = workspace;
    return await this.userRepository.save(user); // 'This action adds a new user';
  }

  findOneById(id: number) {
    // Logic to find a user by ID
    return `This action returns user with id #${id}`;
  }
  findAll() {
    const users = this.userRepository.find();
    console.log(users);
    return users;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
