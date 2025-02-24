import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskInterface } from './tasks.model';

@Controller('tasks')
export class TasksController {
  // add constructor
  constructor(private _tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskInterface[] {
    return this._tasksService.getAllTasks();
  }

  @Post()
  createTask(
    @Body('title') title: string,
    @Body('description') description: string,
  ): TaskInterface {
    return this._tasksService.createTask(title, description);
  }
}
