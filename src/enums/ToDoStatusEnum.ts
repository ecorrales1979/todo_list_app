export enum ToDoStatusEnum {
  PENDING = 1,
  FINISHED = 2,
}

export const ToDoStatusName = new Map<number, string>([
  [ToDoStatusEnum.PENDING, 'Pending'],
  [ToDoStatusEnum.FINISHED, 'Finished'],
]);
