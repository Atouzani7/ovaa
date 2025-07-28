import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql';
import { NotFoundException } from '@nestjs/common';
import { Workspace } from './entities/workspace.entity';
import { WorkspaceService } from './workspace.service';
import { CreateWorkspaceDto } from './dto/create-workspace.dto';

@Resolver(() => Workspace)
export class WorkspaceResolver {
  constructor(private readonly workspaceService: WorkspaceService) {}

  //? QUERIES _____________________________________________________________________________________________________________________________________________
  // @Query(() => Workspace, { name: 'workspace' })
  // // findOne(@Args('id') id: number) {
  // findOne(@Args('id', { type: () => ID }) id: string) {
  //   return this.workspaceService.findOne({ where: { id } });
  // }

  @Query(() => Workspace, { name: 'workspace' })
  async findOne(@Args('id', { type: () => ID }) id: string) {
    const workspace = await this.workspaceService.findOne(id);
    if (!workspace) {
      throw new NotFoundException(`Workspace with ID ${id} not found`);
    }
    return workspace;
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
