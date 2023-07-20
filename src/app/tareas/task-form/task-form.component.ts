import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TareaService } from 'src/app/tarea.service';
import { Tarea } from 'src/app/tarea.model';
@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  nuevaTarea: Tarea = {
    id: 0,
    name: '',
    category: '',
    description: '',
    dateInit: '',
    dateEnd: '',
    state: '',
    active: true,
  };

  constructor(private tareaService: TareaService) { }
  
  ngOnInit() {
    this.tareaService.getTareaParaEditar().subscribe((tarea: Tarea | null) => {
      if (tarea) {
        this.nuevaTarea = tarea;
      }
    });
  }
  agregarOActualizarTarea(tareaForm: NgForm) {
    if (tareaForm.valid) {
      if (this.nuevaTarea.id === 0) {
        this.tareaService.agregarTarea(this.nuevaTarea)
      } else {
        this.tareaService.actualizarTarea(this.nuevaTarea);
      }
      this.limpiarFormulario(tareaForm);
    }
  }
  limpiarFormulario(tareaForm: NgForm) {
    this.nuevaTarea = {
      id: 0,
      name: '',
      category: '',
      description: '',
      dateInit: '',
      dateEnd: '',
      state: '',
      active: true,
    };
    tareaForm.resetForm();
    this.tareaService.limpiarTarea();
  }
}
{
  id: 0;
  name
}