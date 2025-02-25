import { Injectable, NotFoundException } from '@nestjs/common';
import { TaskStatusEnum } from './task-status.enum';
import { CreateTaskDTO } from './DTO/create-task.dto';
import { GetTasksFilterDTO } from './DTO/get-tasks-filter.dto';
import { TaskEntity } from './task.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(TaskEntity)
    private tasksRepository: Repository<TaskEntity>,
  ) {}
  // getAllTasks(): TaskInterface[] {
  //   return this._tasks;
  // }
  // getTasksWithFilters(filterDTO: GetTasksFilterDTO): TaskInterface[] {
  //   const { status, search } = filterDTO;
  //   // get a copy of tasks
  //   let tasks = this.getAllTasks();
  //   if (status) {
  //     tasks = tasks.filter((task) => task.status === status);
  //   }
  //   if (search) {
  //     tasks = tasks.filter((task) => {
  //       if (
  //         task.title.toLowerCase().includes(search.toLowerCase()) ||
  //         task.description.toLowerCase().includes(search.toLowerCase())
  //       ) {
  //         return true;
  //       } else {
  //         return false;
  //       }
  //     });
  //   }
  //   return tasks;
  // }
  // createTask(createTaskDTO: CreateTaskDTO): TaskInterface {
  //   const { title, description } = createTaskDTO;
  //   const task: TaskInterface = {
  //     id: uuidv4(),
  //     description,
  //     title,
  //     status: TaskStatusEnum.OPEN,
  //   };
  //   this._tasks.push(task);
  //   return task;
  // }

  async getTaskById(id: string): Promise<TaskEntity> {
    const found = await this.tasksRepository.findOneBy({ id: id });
    if (!found) {
      throw new NotFoundException(`Task with ID ${id} is not found in table`);
    }
    return found;
  }

  // getTaskById(id: string): TaskInterface {
  //   // try to get task if not found throw a 404 error
  //   // otherwise return found tasks
  //   const found = this._tasks.find((task) => task.id === id);
  //   if (!found) {
  //     throw new NotFoundException(`Task with id ${id} not found`);
  //   }
  //   return found;
  // }
  // deleteTaskById(id: string): void {
  //   const found = this.getTaskById(id);
  //   this._tasks = this._tasks.filter((task) => task.id !== found.id);
  // }
  // updateTaskStatus(id: string, status: TaskStatusEnum) {
  //   const task = this.getTaskById(id);
  //   if (task) {
  //     task.status = status;
  //     return task;
  //   }
  // }
}
