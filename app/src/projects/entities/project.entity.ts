import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Step } from 'src/steps/entities/step.entity';
import { User } from 'src/users/entities/user.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

export type Status =
  | 'In progress'
  | 'Pending feedback'
  | 'In testing'
  | 'Valided'
  | 'Termined'
  | 'Archived'
  | 'Canceled';
@ObjectType()
@Entity('projects')
export class Project {
  @Field(() => ID, { description: 'Unique identifier for the project' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => String, { description: 'Name of the project' })
  @Column({ unique: false })
  name: string;

  @Field(() => String, { description: 'Description of the project' })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String, { description: 'Creation date of the project' })
  @Column({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Field(() => String, { description: 'Staus state progress of the project' })
  @Column({ nullable: true })
  status?: Status;

  @Field(() => String, { description: 'Name of the project' })
  @ManyToMany(() => User, (user) => user.project, { nullable: true })
  userId: User;

  @Field(() => Workspace, { description: 'Workspace of the project' })
  @ManyToOne(() => Workspace, (workspace) => workspace.project, {
    nullable: true,
  })
  workspace?: Workspace[];

  @Field(() => String, { description: 'Step of the project' })
  @ManyToMany(() => Step, (step) => step.projectId, { nullable: true })
  step?: Step[];
}
