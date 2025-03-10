import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

import { CreateTaskDTO } from './DTO/create-task.dto';
import { GetTasksFilterDTO } from './DTO/get-tasks-filter.dto';
import { UpdateTaskStatusDTO } from './DTO/update-task-status.dto';

@Controller('tasks')
export class TasksController {
  // add constructor
  constructor(private _tasksService: TasksService) {}

  // @Get()
  // getTasks(@Query() filterDTO: GetTasksFilterDTO): TaskInterface[] {
  //   // if we have params then we search with filter or we call all
  //   if (Object.keys(filterDTO).length) {
  //     // run some kind of tasks function
  //     return this._tasksService.getTasksWithFilters(filterDTO);
  //   }
  //   return this._tasksService.getAllTasks();
  // }

  // @Get('/:id')
  // getTaskById(@Param('id') id: string): TaskInterface {
  //   return this._tasksService.getTaskById(id);
  // }

  // @Delete('/:id')
  // deleteTaskById(@Param('id') id: string): void {
  //   return this._tasksService.deleteTaskById(id);
  // }

  // @Post()
  // createTask(@Body() createTaskDTO: CreateTaskDTO): TaskInterface {
  //   return this._tasksService.createTask(createTaskDTO);
  // }

  // @Patch('/:id/status')
  // updateTaskId(
  //   @Param('id') id: string,
  //   @Body() updateTaskStatusDTO: UpdateTaskStatusDTO,
  // ): TaskInterface | undefined {
  //   const { status } = updateTaskStatusDTO;
  //   return this._tasksService.updateTaskStatus(id, status);
  // }
}
