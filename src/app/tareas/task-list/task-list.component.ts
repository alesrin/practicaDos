import { Component, OnInit } from '@angular/core';
import { TareaService } from 'src/app/tarea.service';
import { Tarea } from 'src/app/tarea.model';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tareas: Tarea[] = [];
  constructor(private tareaService:
    TareaService) { }
  
  ngOnInit() {
    this.actualizarTareas();
  }
  actualizarTareas() {
    this.tareas = this.tareaService.getTareas();
  }
  eliminarTarea(id: number) {
    this.tareaService.eliminarTarea(id);
    this.actualizarTareas();
  }
  editarTarea(tarea: Tarea) {
    this.tareaService.setTareaParaEditar(tarea);
  }
}
