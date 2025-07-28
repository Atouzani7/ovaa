import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Workspace } from './entities/workspace.entity';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';

@Resolver(() => Workspace)
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}

  //? QUERIES _____________________________________________________________________________________________________________________________________________
  @Query(() => Workspace, { name: 'workspace' })
  findOne(@Args('id') id: number) {
    return this.workspaceService.findOne(id);
  }
  @Query(() => [Workspace], { name: 'workspaces' })
  findAll() {
    return this.workspaceService.findAll();
  }

  //? MUTATIONS _____________________________________________________________________________________________________________________________________________

  @Mutation(() => Workspace)
  createWorkspace(
    @Args('createWorkspaceDto') createWorkspaceDto: CreateWorkspaceDto,
  ) {
    return this.workspaceService.create(createWorkspaceDto);
  }
}
