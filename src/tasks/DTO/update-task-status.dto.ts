/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum } from 'class-validator';
import { TaskStatusEnum } from '../tasks.model';

export class UpdateTaskStatusDTO {
  @IsEnum(TaskStatusEnum)
  status: TaskStatusEnum;
}
