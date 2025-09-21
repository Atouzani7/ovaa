import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import { File } from 'src/file/entities/file.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Workspace } from 'src/workspace/entities/workspace.entity';
import {
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Column } from 'typeorm';

export type Role = 'USER' | 'ADMIN' | 'CUSTOMER' | 'GUEST';
export type Status = 'ACTIVE' | 'INACTIVE' | 'BANNED';

@ObjectType()
@Entity('users')
export class User {
  @Field(() => ID, { description: 'Unique identifier for the user' })
  @PrimaryGeneratedColumn('uuid')
  id!: string;

  @Field(() => String, { description: 'Username of the user' })
  @Column()
  lastname?: string;

  @Field(() => String)
  @Column()
  name?: string;

  @Field(() => String, { description: 'Email of the user', nullable: true })
  @Column({ unique: true })
  email!: string;

  @Field(() => String, { description: 'Password of the user', nullable: true })
  @Column()
  password!: string;

  @Field(() => String, { description: 'Role of the user' })
  @Column({
    type: 'enum',
    enum: ['USER', 'ADMIN', 'CUSTOMER', 'GUEST'],
    default: 'USER',
  })
  role!: Role;

  @Field(() => String, { description: 'Avatar of the user' })
  @Column({
    nullable: true,
    default:
      'https://raw.githubusercontent.com/Atouzani7/Asma-web-developer/e2966d158e6676b54f33ab6343776bf606655ed1/frontend/public/Ovaa.png',
  })
  avatar?: string;

  @Field(() => String, { description: 'Date of creation of the user' })
  @CreateDateColumn({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Field(() => String, { description: 'Status of the user' })
  @Column({ nullable: false, default: 'ACTIVE' })
  status?: Status;

  @Field(() => String, { description: 'Date of last update of the user' })
  @Column({
    nullable: false,
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  @UpdateDateColumn({ nullable: false, type: 'timestamp' })
  updatedAt?: string;

  // @Field(() => Workspace, { nullable: true })
  // @ManyToMany(() => Workspace, (workspace) => workspace.user, {
  //   cascade: true,
  //   eager: true, // optionnel
  // })
  // @JoinColumn()
  // workspace?: Workspace;
  @ManyToOne(() => Workspace, (workspace) => workspace.users, {
    nullable: true,
  })
  workspace: Workspace;

  @Field(() => [Project], { description: 'Project ID of the user' })
  @ManyToMany(() => Project, (project) => project.userId, { nullable: true })
  @JoinColumn()
  project?: Project[];

  @Field(() => String, {
    description: 'Comment posted by the user',
    nullable: true,
  })
  @OneToOne(() => Comment, (comment) => comment.userId)
  comment?: Comment[];

  @Field(() => String, { description: 'User ID of the user', nullable: true })
  @OneToOne(() => File, (file) => file.userId, { nullable: true })
  file?: File[];
}
