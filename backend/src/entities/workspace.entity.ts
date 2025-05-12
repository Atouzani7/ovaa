import { Length } from "class-validator";
import { Field } from "type-graphql";
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserEntity } from "./user.entity";
import { ProjectEntity } from "./project.entity";
import { FileEntity } from "./file.entity";

@Entity("workspace")
export class WorkspaceEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  @Length(1, 50)
  name!: string;

  @Field()
  @Column()
  logo_picture?: string;

  @Field()
  @Column()
  // status?: enum;
  status!: "ACTIVE" | "ARCHIVED";

  @Field()
  @Column({ type: "timestamp", nullable: true })
  created_at?: Date;

  @Field(() => [ProjectEntity])
  @OneToMany(() => ProjectEntity, (project) => project.workspace)
  projects!: ProjectEntity[];

  @Field(() => UserEntity)
  @ManyToMany(() => UserEntity, (user) => user.workspaceID)
  @JoinTable()
  userID!: UserEntity[];

  @Field(() => FileEntity)
  @ManyToMany(() => FileEntity, (file) => file.workspace)
  files!: FileEntity[];
}
