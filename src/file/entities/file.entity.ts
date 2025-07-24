import { Field, ID, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity('files')
export class File {
  @Field(() => ID, { description: 'Unique identifier for the file' })
  @PrimaryGeneratedColumn('uuid')
  id!: number;

  @Field(() => String, { description: 'Name of the file' })
  @Column({ unique: true })
  name: string;

  @Field(() => String, { description: 'Path of the file' })
  @Column({ unique: true })
  path: string;

  @Field(() => String, { description: 'creation date of the file' })
  @CreateDateColumn({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Field(() => String, { description: 'User id to which the file belongs' })
  @OneToMany(() => User, (user) => user.file, { nullable: true })
  userId: string;

  @Field(() => String, { description: 'User id to which the file belongs' })
  @OneToMany(() => Workspace, (workspace) => workspace.file, { nullable: true })
  workspace?: Workspace[];
}
