import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import { UpdateUserDto } from './dto/update-user.dto';

export type user = User;

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Workspace)
    private readonly workspaceRepository: Repository<Workspace>,
  ) {}

  // async create(createUserDto: CreateUserDto): Promise<User> {
  //   const workspace = this.workspaceRepository.create({
  //     name: createUserDto.name,
  //   });

  //   await this.workspaceRepository.save(workspace);

  //   const user = this.userRepository.create(createUserDto);
  //   workspace.user = user;
  //   user.workspace = workspace;
  //   return await this.userRepository.save(user); // 'This action adds a new user';
  // }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const existingUser = await this.userRepository.findOne({
      where: { email: createUserDto.email },
    });

    if (existingUser) {
      throw new Error(`User with email ${createUserDto.email} already exists`);
    }

    const workspace = this.workspaceRepository.create({
      name: createUserDto.name, // ou un champ spécifique
    });

    await this.workspaceRepository.save(workspace);

    const user = this.userRepository.create({
      ...createUserDto,
      workspace,
    });

    workspace.users = [user];

    return await this.userRepository.save(user);
  }

  findOneById(id: number) {
    // Logic to find a user by ID
    return `This action returns user with id #${id}`;
  }
  findAll() {
    const users = this.userRepository.find();
    console.log(users);
    console.log('User from DB:', users);
    return users;
  }

  async findOne(id: string): Promise<User | undefined> {
    const user = await this.userRepository.findOne({
      where: { id },
      select: [
        'id',
        'lastname',
        'name',
        'email',
        'password',
        'role',
        'avatar',
        'createdAt',
      ],
    });
    return user === null ? undefined : user;
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
    if (!user) {
      throw new Error('User not found');
    }

    // On enlève les champs undefined pour ne pas écraser avec null
    const filteredDto = Object.fromEntries(
      Object.entries(updateUserDto).filter(([_, value]) => value !== undefined),
    );

    const userUpdated = { ...user, ...filteredDto };
    if (!userUpdated.status) {
      userUpdated.status = user.status ?? 'ACTIVE';
    }
    userUpdated.updatedAt = new Date().toISOString();

    return this.userRepository.save(userUpdated);
  }

  async remove(id: string): Promise<User | null> {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      return null;
    }
    // await this.userRepository.remove(user);
    // return user;

    if (!user) return null;

    await this.userRepository.remove(user);
    return user;
  }
}
