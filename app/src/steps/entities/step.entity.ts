import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Comment } from 'src/comment/entities/comment.entity';
import { Project, Status } from 'src/projects/entities/project.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from 'typeorm';

@ObjectType()
@Entity('steps')
export class Step {
  @Field(() => ID, { description: 'Unique identifier for the step' })
  @PrimaryColumn({ primary: true, type: 'uuid' })
  id!: string;

  @Field(() => String, { description: 'Name of the step' })
  @Column({ unique: false })
  name: string;

  @Field(() => String, { description: 'Description of the step' })
  @Column({ nullable: true })
  description?: string;

  @Field(() => String, { description: 'Creation date of the step' })
  @Column({ nullable: false, type: 'timestamp' })
  createdAt: Date;

  @Field(() => String, { description: 'Status of the step' })
  @Column({ nullable: true })
  status?: Status;

  @Field(() => String, { description: 'Project ID of the step' })
  @ManyToOne(() => Project, (project) => project.step, { nullable: true })
  projectId?: string;

  @Field(() => String, { description: 'comment`s step of the project' })
  @OneToMany(() => Comment, (comment) => comment.step, { nullable: true })
  commentId?: string;
}
