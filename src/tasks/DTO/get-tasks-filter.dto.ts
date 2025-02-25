/* eslint-disable @typescript-eslint/no-unsafe-call */
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { TaskStatusEnum } from '../tasks.model';

export class GetTasksFilterDTO {
  @IsOptional()
  @IsEnum(TaskStatusEnum)
  status?: TaskStatusEnum;
  @IsOptional()
  @IsString()
  search?: string;
}
