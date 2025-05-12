import { Field, ID } from "type-graphql";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { ProjectEntity } from "./project.entity";
import { CommentEntity } from "./comment.entity";

@Entity("steps")
export class StepEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  description!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  status!: "ACTIVE" | "ARCHIVED";

  @Field()
  @Column({ type: "timestamp", nullable: true })
  created_at?: Date;

  @Field(() => ProjectEntity)
  @ManyToOne(() => ProjectEntity, (project) => project.steps, {
    onDelete: "CASCADE",
  })
  project!: ProjectEntity[];

  @Field(() => [CommentEntity])
  @OneToMany(() => CommentEntity, (comment) => comment.step)
  comments!: CommentEntity[];
}
