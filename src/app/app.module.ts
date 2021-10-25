import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ViewsComponent } from './components/nav/views/views.component';
import { CategoriesComponent } from './components/nav/categories/categories.component';
import { TodayComponent } from './components/views/today/today.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TaskComponent } from './components/tasks-list/task/task.component';
import { ScheduledComponent } from './components/views/scheduled/scheduled.component';
import { UnscheduledComponent } from './components/views/unscheduled/unscheduled.component';
import { AllComponent } from './components/views/all/all.component';
import { EmptyInfoComponent } from './components/empty-info/empty-info.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ViewsComponent,
    CategoriesComponent,
    TodayComponent,
    AddTaskComponent,
    TasksListComponent,
    TaskComponent,
    ScheduledComponent,
    UnscheduledComponent,
    AllComponent,
    EmptyInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
