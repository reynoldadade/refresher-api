/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatusEnum } from '../task-status.enum';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsEnum(TaskStatusEnum)
  status?: TaskStatusEnum;
  @IsOptional()
  @IsString()
  search?: string;
}
