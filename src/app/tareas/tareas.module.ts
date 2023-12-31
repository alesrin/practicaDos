import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent,
    TaskFormComponent,
    TaskDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    TaskListComponent,
    TaskFormComponent,
    TaskDetailComponent
  ]
})
export class TareasModule { }
