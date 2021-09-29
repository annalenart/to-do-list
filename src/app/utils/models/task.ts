import { Category } from './nav';

export interface TaskCreation {
  name: string;
  note?: string;
  date?: string;
  displayDate?: string;
  category: Pick<Category, "name" | "color">
}

export interface Task extends TaskCreation{
  id: string;
}

export type Tasks = Array<Task>
