import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { TaskCreation, Tasks } from '../utils/models/task';

@Injectable({
  providedIn: 'root'
})
export class TasksProviderService {

  constructor(private http: HttpClient) {
  }

  getTasks(): Observable<Tasks> {
    return this.http.get<Tasks>(`${environment.apiUrl}/tasks?_sort=date,category.name&_order=asc`);
  }

  addTask(task: TaskCreation) {
    return this.http.post(`${environment.apiUrl}/tasks`, task);
  }

  deleteTask(taskId: string) {
    return this.http.delete(`${environment.apiUrl}/tasks/${taskId}`);
  }
}
