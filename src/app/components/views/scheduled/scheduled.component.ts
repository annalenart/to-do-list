import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { TasksService } from '../../../services/tasks.service';
import { Tasks } from '../../../utils/models/task';

type ScheduledTasks = Array<{
  date: string,
  tasks: Tasks
}>;
type ObjTasks = Record<string, Tasks>;

@Component({
  selector: 'app-scheduled',
  templateUrl: './scheduled.component.html',
  styleUrls: ['./scheduled.component.scss']
})
export class ScheduledComponent implements OnInit {
  @Input() category$: Observable<string | undefined>;
  @HostBinding('class.scroll') @Input() scrollNeeded: boolean = true;

  daysList$: Observable<ScheduledTasks>;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.category$ ||= of(undefined);
    this.daysList$ = this.category$.pipe(
      switchMap((category: string | undefined) => this.tasksService.scheduledTasks(category)),
      map((tasks: Tasks) => {
        return Object.entries(tasks.reduce((acc, cur) => {
          if (acc[cur.displayDate!]) {
            return {...acc, [cur.displayDate!]: [...acc[cur.displayDate!], cur]};
          }
          return {...acc, [cur.displayDate!]: [cur]};
        }, {} as ObjTasks)).map(([date, tasks]: [string, Tasks]) => ({date, tasks}));
      }));
  }
}
