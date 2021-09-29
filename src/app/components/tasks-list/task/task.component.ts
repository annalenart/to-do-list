import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../utils/models/task';

export interface DeleteData {
  id: string;
  remove: boolean;
}

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() queries = new EventEmitter<DeleteData>();

  ngOnInit(): void {
  }

  checkboxChanged(event: Event, id: string) {
    // @ts-ignore
    this.queries.emit({id, remove: event.target.checked});
  }
}
