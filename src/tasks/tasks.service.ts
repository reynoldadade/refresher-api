import { Injectable } from '@nestjs/common';
import { TaskInterface, TaskStatusEnum } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TasksService {
  private _tasks: TaskInterface[] = [];

  getAllTasks(): TaskInterface[] {
    return this._tasks;
  }

  createTask(title: string, description: string): TaskInterface {
    const task: TaskInterface = {
      id: uuidv4(),
      description,
      title,
      status: TaskStatusEnum.OPEN,
    };
    this._tasks.push(task);
    return task;
  }
}
