import { InputType, Field } from '@nestjs/graphql';
// import { Role } from '../entities/user.entity';

import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
  CUSTOMER = 'CUSTOMER',
  GUEST = 'GUEST',
}
@InputType()
export class CreateUserDto {
  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  email: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  firstName?: string;

  // @Field({ nullable: true })
  // role?: Role;
}

registerEnumType(Role, {
  name: 'Role',
});
