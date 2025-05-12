import { Field } from "type-graphql";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { StepEntity } from "./step.entity";
import { UserEntity } from "./user.entity";

@Entity("comments")
export class CommentEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  content!: string;

  @Field()
  @Column({ type: "timestamp", nullable: true })
  created_at?: Date;

  @Field(() => UserEntity)
  @ManyToOne(() => UserEntity, (user) => user.comments)
  user!: UserEntity[];

  @Field(() => StepEntity)
  @ManyToOne(() => StepEntity, (step) => step.comments)
  step!: StepEntity[];
}
