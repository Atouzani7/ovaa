import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import { File } from 'src/file/entities/file.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import {
  CreateDateColumn,
  Entity,
  ManyToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Column } from 'typeorm';

export type Role = 'USER' | 'ADMIN' | 'CUSTOMER' | 'GUEST';
export type Status = 'ACTIVE' | 'INACTIVE' | 'BANNED';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID, { description: 'Unique identifier for the user' })
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Field(() => String, { description: 'Username of the user' })
  @Column({ unique: true })
  username: string;

  @Field(() => String, { description: 'name of the user' })
  @Column({ unique: true })
  name: string;

  @Field(() => String, { description: 'Email of the user' })
  @Column({ unique: true })
  email!: string;

  @Field(() => String, { description: 'Password of the user' })
  @Column()
  password!: string;

  @Field(() => String, { description: 'Role of the user' })
  @Column()
  role!: Role;

  @Field(() => String, { description: 'Avatar of the user' })
  @Column({ nullable: true })
  avatar?: string;

  @Field(() => String, { description: 'Date of creation of the user' })
  @CreateDateColumn({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Field(() => String, { description: 'Status of the user' })
  @Column({ nullable: true })
  status?: Status;

  @Field(() => String, { description: 'Date of last update of the user' })
  @Column({ nullable: true })
  updatedAt?: string;

  @Field(() => Workspace, { nullable: true })
  @OneToOne(() => Workspace, (workspace) => workspace.user)
  Workspace?: Workspace;

  @Field(() => String, { description: 'Project ID of the user' })
  @ManyToMany(() => Project, (project) => project.userId, { nullable: true })
  project?: Project[];

  @Field(() => String, { description: 'Comment posted by the user' })
  @OneToOne(() => Comment, (comment) => comment.userId, { nullable: true })
  comment?: Comment[];

  @Field(() => String, { description: 'User ID of the user' })
  @OneToOne(() => File, (file) => file.userId, { nullable: true })
  file?: File[];
}
