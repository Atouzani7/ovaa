import { InputType, Field } from '@nestjs/graphql';
import { Role } from '../entities/user.entity';

@InputType()
export class CreateUserDto {
  @Field()
  username: string;

  @Field()
  name: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field({ nullable: true })
  role?: Role;
}
