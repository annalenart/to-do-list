import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TasksService } from '../../../services/tasks.service';
import { Tasks } from '../../../utils/models/task';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss']
})
export class TodayComponent implements OnInit {
  currentDate = this.tasksService.todayDate;

  tasks$: Observable<Tasks>;

  constructor(private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.tasks$ = this.tasksService.todayTasks();
  }
}
