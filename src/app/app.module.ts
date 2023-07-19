import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TareasModule } from './tareas/tareas.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TaskListComponent } from './tareas/task-list/task-list.component';
import { TaskDetailComponent } from './tareas/task-detail/task-detail.component';
import { TaskFormComponent } from './tareas/task-form/task-form.component';
@NgModule({
  declarations: [
    AppComponent,
    TaskDetailComponent,
    TaskFormComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TareasModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
