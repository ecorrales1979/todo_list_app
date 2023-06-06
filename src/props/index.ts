import { ToDoStatusEnum } from '@/enums/ToDoStatusEnum';

export interface ToDo {
  id: string;
  name: string;
  status: ToDoStatusEnum;
}
