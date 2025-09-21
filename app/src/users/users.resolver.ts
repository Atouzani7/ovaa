import { Query, Resolver, Args, Int, Mutation, ID } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  //? QUERIES _____________________________________________________________________________________________________________________________________________
  // @Query(() => User)
  // user(@Args('id', { type: () => Int }) id: number) {
  //   return this.usersService.findOneById(id);
  // }

  // @Query(() => User)
  // user(@Args('id', { type: () => ID }) id: string) {
  //   return this.usersService.findOneById(+id);
  // }

  @Query(() => User, { nullable: true })
  user(@Args('id', { type: () => ID }) id: string) {
    return this.usersService.findOne(id); // <-- pas de '+id'
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

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => ID }) id: string) {
    return `This action removes a #${id} user`;
  }

  // @Mutation(() => User)
  // updateUser(
  //   @Args('id', { type: () => ID }) id: string,
  //   @Args('updateUser') updateUser: CreateUserDto,
  // ) {
  //   return this.usersService.updateUser(id, updateUser);
  // }

  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateUser') updateUser: UpdateUserDto,
  ) {
    return this.usersService.updateUser(id, updateUser);
  }
}
