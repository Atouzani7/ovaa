import { Field, GraphQLISODateTime, ID } from "type-graphql";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Length } from "class-validator";
import { GraphQLEmailAddress } from "graphql-scalars";
import { WorkspaceEntity } from "./workspace.entity";
import { ProjectEntity } from "./project.entity";
import { CommentEntity } from "./comment.entity";

export type Role = "ADMIN" | "PRO" | "CUSTOMER";
export type Status = "ACTIVE" | "ARCHIVED";

@Entity("user")
export class UserEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  @Length(1, 255)
  firstname!: string;

  @Field()
  @Column()
  @Length(1, 255)
  lastname!: string;

  @Field(() => GraphQLEmailAddress)
  @Column({ unique: true })
  @Length(1, 30)
  email!: string;

  @Field()
  @Column()
  @Length(1, 15)
  password!: string;

  @Field()
  @Column()
  phone_number?: number;

  @Field()
  @Column({
    default:
      "https://media.istockphoto.com/id/96430770/fr/photo/girafe.jpg?s=612x612&w=0&k=20&c=1ElLwOoZguXV8n48S1RDHG_fuzmxcjG4quNaBcLFy3g= ",
    nullable: true,
  })
  profil_picture?: string;

  @Field()
  @Column()
  role?: string;

  @Field()
  @Column()
  status?: string;

  @Field(() => GraphQLISODateTime)
  @Column({ type: "timestamp", nullable: true })
  created_at?: Date;

  @Field(() => WorkspaceEntity)
  @ManyToMany(() => WorkspaceEntity, (workspace) => workspace.userID)
  @JoinTable()
  workspaceID!: WorkspaceEntity[];

  @Field(() => [ProjectEntity])
  @ManyToMany(() => ProjectEntity, (project) => project.userID)
  @JoinTable()
  projectID!: ProjectEntity[];

  @Field(() => [CommentEntity])
  @OneToMany(() => CommentEntity, (comment) => comment.user)
  @JoinTable()
  comments!: CommentEntity[];
}
