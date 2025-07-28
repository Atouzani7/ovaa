import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { Workspace } from './entities/workspace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceResolver } from './workspace.resolver';
import { UsersService } from 'src/users/users.service';
import { User } from 'src/users/entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Workspace, User])], // Uncomment if using Type
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceResolver, UsersService],
})
export class WorkspaceModule {}
