import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { TasksService } from '../../../services/tasks.service';
import { Tasks } from '../../../utils/models/task';

@Component({
  selector: 'app-unscheduled',
  templateUrl: './unscheduled.component.html',
  styleUrls: ['./unscheduled.component.scss']
})
export class UnscheduledComponent implements OnInit {
  @Input() category$: Observable<string | undefined>;
  @HostBinding('class.scroll') @Input() scrollNeeded: boolean = true;

  tasks$: Observable<Tasks>;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.category$ ||= of(undefined);
    this.tasks$ = this.category$.pipe(
      switchMap((category: string | undefined) => this.tasksService.unscheduledTasks(category)));
  }
}
