import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Step } from 'src/steps/entities/step.entity';
import { User } from 'src/users/entities/user.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('comment')
export class Comment {
  @Field(() => ID, { description: 'Unique identifier for the user' })
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Field(() => String, { description: 'Content of the comment' })
  @Column()
  content: string;

  @Field(() => String, { description: 'Date of creation of the comment' })
  @CreateDateColumn({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Field(() => String, { description: 'User' })
  @ManyToOne(() => User, (user) => user.comment, { nullable: false })
  userId: User;

  @Field(() => String, { description: 'Project ID of the comment' })
  @ManyToOne(() => User, (user) => user.project, { nullable: true })
  projectId?: User;

  @Field(() => String, { description: 'Workspace ID of the comment' })
  @OneToMany(() => Workspace, (workspace) => workspace.comment, {
    nullable: true,
  })
  workspace?: Workspace;

  @Field(() => String, { description: 'Step ID of the comment' })
  @ManyToOne(() => Step, (step) => step.commentId, { nullable: true })
  step?: Step[];
}
