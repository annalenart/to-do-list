import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Task, Tasks } from '../utils/models/task';
import { TasksProviderService } from './tasks-provider.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService implements OnDestroy {
  todayDate = new Date().toLocaleDateString('en-GB');

  tasks$ = new ReplaySubject<Tasks>(1);
  refreshSub$ = new BehaviorSubject(undefined);
  refreshSubSubscription: Subscription;

  constructor(private tasksProvider: TasksProviderService) {
    this.refreshSubSubscription = this.refreshSub$.pipe(
      switchMap(() => this.tasksProvider.getTasks())
    ).subscribe((tasks: Tasks) => this.tasks$.next(tasks));
  }

  ngOnDestroy(): void {
    this.refreshSubSubscription && this.refreshSubSubscription.unsubscribe();
  }

  refreshTasks() {
    this.refreshSub$.next(undefined);
  }

  todayTasks(): Observable<Tasks> {
    return this.tasks$.pipe(map((tasks: Tasks) => tasks.filter((task: Task) => task.date === this.todayDate)));
  }

  scheduledTasks(category: string | undefined): Observable<Tasks> {
    return this.tasks$.pipe(
      map((tasks: Tasks) => tasks.filter((task: Task) => category ? (task.date && task.category.name === category) : task.date)));
  }

  unscheduledTasks(category: string | undefined): Observable<Tasks> {
    return this.tasks$.pipe(
      map((tasks: Tasks) => tasks.filter((task: Task) => category ? (!task.date && task.category.name === category) : !task.date)));
  }
}
