import { TaskStatusEnum } from '../tasks.model';

export class GetTasksFilterDTO {
  status?: TaskStatusEnum;
  search?: string;
}
