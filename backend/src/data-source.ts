import { DataSource } from "typeorm";
import { UserEntity } from "./entities/user.entity";
import { CommentEntity } from "./entities/comment.entity";
import { FileEntity } from "./entities/file.entity";
import { ProjectEntity } from "./entities/project.entity";
import { WorkspaceEntity } from "./entities/workspace.entity";
import { StepEntity } from "./entities/step.entity";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "postgres",
  database: process.env.DB_NAME || "postgres",
  synchronize: true,
  logging: false,
  entities: [
    UserEntity,
    CommentEntity,
    FileEntity,
    ProjectEntity,
    WorkspaceEntity,
    StepEntity,
  ],
});
