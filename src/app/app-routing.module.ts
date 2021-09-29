import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AllComponent } from './components/views/all/all.component';
import { ScheduledComponent } from './components/views/scheduled/scheduled.component';
import { TodayComponent } from './components/views/today/today.component';
import { UnscheduledComponent } from './components/views/unscheduled/unscheduled.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/all',
    pathMatch: 'full'
  },
  {
    path: 'add',
    component: AddTaskComponent
  },
  {
    path: 'today',
    component: TodayComponent
  },
  {
    path: 'scheduled',
    component: ScheduledComponent
  },
  {
    path: 'unscheduled',
    component: UnscheduledComponent
  },
  {
    path: 'all',
    component: AllComponent
  },
  {
    path: ':category',
    component: AllComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
