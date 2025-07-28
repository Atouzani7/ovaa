import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { Workspace } from './entities/workspace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkspaceResolver } from './workspace.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([Workspace])], // Uncomment if using Type
  controllers: [WorkspaceController],
  providers: [WorkspaceService, WorkspaceResolver],
})
export class WorkspaceModule {}
