import { Query, Resolver, Args, Int } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  //? QUERIES _____________________________________________________________________________________________________________________________________________
  @Query(() => User)
  user(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById(id);
  }

  //? MUTATIONS _____________________________________________________________________________________________________________________________________________
}
