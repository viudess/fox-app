import { IUser } from "./IUser";

export interface ITodo {
  id: string;
  task: string;
  date:  Date | string;
  everyDay: Boolean;
  createdBy: string;
  assignedTo: Array<IUser | undefined>;
  check: Boolean;
}
