import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { NavigationProviderService } from '../../services/navigation-provider.service';
import { TasksProviderService } from '../../services/tasks-provider.service';
import { TasksService } from '../../services/tasks.service';
import { Categories } from '../../utils/models/nav';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  categories$: Observable<Categories>;
  taskForm: FormGroup;
  minDate = new Date();

  constructor(private navProvider: NavigationProviderService, private tasksProvider: TasksProviderService,
              private tasksService: TasksService) {
  }

  ngOnInit(): void {
    this.categories$ = this.navProvider.getCategories();

    this.taskForm = new FormGroup({
      name: new FormControl(null, Validators.required),
      note: new FormControl(null),
      category: new FormControl(null, Validators.required),
      date: new FormControl(null)
    });
  }

  onSubmit() {
    const {name, color} = this.taskForm.value.category;
    const newTask = {
      ...this.taskForm.value,
      name: this.taskForm.value.name.charAt(0).toUpperCase() + this.taskForm.value.name.slice(1),
      date: this.taskForm.value.date ? this.taskForm.value.date.toLocaleDateString('en-US') : null,
      displayDate: this.taskForm.value.date ? this.taskForm.value.date.toLocaleDateString('en-GB') : null,
      category: {
        name, color
      }
    };
    this.tasksProvider.addTask(newTask).subscribe(() => this.tasksService.refreshTasks());
    this.taskForm.reset();
  }
}
