import { Component, Input, OnInit } from '@angular/core';
import { TasksProviderService } from '../../services/tasks-provider.service';
import { TasksService } from '../../services/tasks.service';
import { Task, Tasks } from '../../utils/models/task';
import { DeleteData } from './task/task.component';

type CategoryTasks = Array<{
  category: string,
  tasks: Tasks
}>;
type ObjTasks = Record<string, Tasks>;

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
  categoryListTest: CategoryTasks;

  @Input()
  set categoryList(tasks: Tasks) {
    this.tasksIntoCategory(tasks);
  }

  constructor(private tasksProvider: TasksProviderService, private tasksService: TasksService) {
  }

  ngOnInit(): void {
  }

  tasksIntoCategory(tasks: Tasks): void {
    this.categoryListTest = Object.entries(
      tasks.reduce((acc: ObjTasks, next: Task) => {
        if (acc[next.category.name!]) {
          return {...acc, [next.category.name!]: [...acc[next.category.name!], next]};
        }
        return {...acc, [next.category.name!]: [next]};
      }, {} as ObjTasks)).map(([category, tasks]: [string, Tasks]) => ({category, tasks}));
  }

  trackTasksToDelete(deleteData: DeleteData) {
    deleteData.remove && this.tasksProvider.deleteTask(deleteData.id).subscribe(() => this.tasksService.refreshTasks());
  }
}
