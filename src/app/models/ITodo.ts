import { IUser } from "./IUser";

export interface ITodo {
  id?: number;
  task: string;
  date:  Date | string;
  time : Date | string,
  everyDay: boolean;
  createdBy: string;
  assignedTo: Array<IUser | undefined>;
  check: boolean;
}
