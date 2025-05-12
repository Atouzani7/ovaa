import { Length } from "class-validator";
import { Field } from "type-graphql";
import {
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  Entity,
} from "typeorm";
import { WorkspaceEntity } from "./workspace.entity";
import { UserEntity } from "./user.entity";
import { StepEntity } from "./step.entity";

export type status = "ACTIVE" | "ARCHIVED";
@Entity("projects")
export class ProjectEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  @Length(1, 250)
  description!: string;

  @Field()
  @Column()
  @Length(1, 50)
  name!: string;

  @Field()
  @Column({
    nullable: true,
    default:
      "https://upload.wikimedia.org/wikipedia/commons/2/25/The_Krusty_Krab.png",
  })
  logo_picture?: string;

  @Field()
  @Column({ type: "timestamp", nullable: true })
  created_at?: Date;

  @Field()
  @Column({ type: "timestamp", nullable: true })
  deadLine?: Date;

  @Field()
  @Column()
  status!: status;

  @Field(() => WorkspaceEntity)
  @ManyToOne(() => WorkspaceEntity, (workspace) => workspace.projects)
  workspace!: WorkspaceEntity;

  @Field(() => [StepEntity])
  @OneToMany(() => StepEntity, (step) => step.project)
  steps!: StepEntity[];

  @Field(() => [UserEntity])
  @ManyToMany(() => UserEntity, (user) => user.projectID)
  userID!: UserEntity[];
}
