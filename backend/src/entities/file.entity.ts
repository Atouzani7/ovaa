import { Field } from "type-graphql";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";
import { WorkspaceEntity } from "./workspace.entity";

@Entity("file")
export class FileEntity {
  @Field()
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column()
  path!: string;

  @Field()
  @Column({ type: "timestamp", nullable: true })
  created_at?: Date;

  @Field(() => WorkspaceEntity)
  @ManyToMany(() => WorkspaceEntity, (workspace) => workspace.files)
  workspace!: WorkspaceEntity[];
}
