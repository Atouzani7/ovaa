import { Field, InputType } from '@nestjs/graphql';
@InputType()
export class CreateWorkspaceDto {
  @Field()
  name: string;
}
