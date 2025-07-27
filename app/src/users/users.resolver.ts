import { Query, Resolver, Args, Int, Mutation } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  //? QUERIES _____________________________________________________________________________________________________________________________________________
  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  @Query(() => [User])
  users() {
    return this.usersService.findAll();
  }

  //? MUTATIONS _____________________________________________________________________________________________________________________________________________

  @Mutation(() => User)
  createUser(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @Mutation(() => User)
  // createUser(@Args('input') input: CreateUserDto) {
  //   return this.usersService.create(input);
  // }
}
