import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import { File } from 'src/file/entities/file.entity';
import { Project } from 'src/projects/entities/project.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('workspaces')
export class Workspace {
  @Field(() => ID, { description: 'Unique identifier for the workspace' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => String, { description: 'Name of the workspace' })
  @Column({ unique: true })
  name: string;

  @Field(() => String, { description: 'Description of the workspace' })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String, { description: 'Creation date of the workspace' })
  @Column({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Field(() => String, { description: 'Img of the workspace' })
  @Column({ nullable: true })
  logo?: string;

  @Field(() => [Project], { description: 'Project id of the workspace' })
  @OneToMany(() => Project, (project) => project.workspace, { nullable: true })
  project?: Project[];

  @Field(() => User, { nullable: true })
  @OneToOne(() => User, (user) => user.Workspace)
  user: User;

  @Field(() => String, { description: 'file in the workspace' })
  @OneToOne(() => File, (file) => file.workspace, { nullable: true })
  file?: File;

  @Field(() => String, {
    description: `Comment's user to which the workspace belongs`,
  })
  @OneToMany(() => Comment, (comment) => comment.workspace, { nullable: true })
  comment?: Comment[];
}
