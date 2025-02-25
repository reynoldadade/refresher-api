import { Injectable } from '@nestjs/common';
import { TaskInterface, TaskStatusEnum } from './tasks.model';
import { v4 as uuidv4 } from 'uuid';
import { CreateTaskDTO } from './DTO/create-task.dto';
import { GetTasksFilterDTO } from './DTO/get-tasks-filter.dto';

@Injectable()
export class TasksService {
  private _tasks: TaskInterface[] = [];

  getAllTasks(): TaskInterface[] {
    return this._tasks;
  }

  getTasksWithFilters(filterDTO: GetTasksFilterDTO): TaskInterface[] {
    const { status, search } = filterDTO;

    // get a copy of tasks
    let tasks = this.getAllTasks();
    if (status) {
      tasks = tasks.filter((task) => task.status === status);
    }
    if (search) {
      tasks = tasks.filter((task) => {
        if (
          task.title.toLowerCase().includes(search.toLowerCase()) ||
          task.description.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    return tasks;
  }

  createTask(createTaskDTO: CreateTaskDTO): TaskInterface {
    const { title, description } = createTaskDTO;
    const task: TaskInterface = {
      id: uuidv4(),
      description,
      title,
      status: TaskStatusEnum.OPEN,
    };
    this._tasks.push(task);
    return task;
  }

  getTaskById(id: string): TaskInterface | null {
    return this._tasks.find((task) => task.id === id) ?? null;
  }

  deleteTaskById(id: string): void {
    this._tasks = this._tasks.filter((task) => task.id !== id);
  }

  updateTaskStatus(id: string, status: TaskStatusEnum) {
    const task = this.getTaskById(id);
    if (task) {
      task.status = status;
      return task;
    }
  }
}
