import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskInterface } from './tasks.model';
import { CreateTaskDTO } from './DTO/create-task.dto';

@Controller('tasks')
export class TasksController {
  // add constructor
  constructor(private _tasksService: TasksService) {}

  @Get()
  getAllTasks(): TaskInterface[] {
    return this._tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() createTaskDTO: CreateTaskDTO): TaskInterface {
    return this._tasksService.createTask(createTaskDTO);
  }
}
