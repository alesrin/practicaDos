import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Tarea } from './tarea.model';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  private tareas: Tarea[] = [];
  private tareaParaEditar: BehaviorSubject<Tarea | null> = new BehaviorSubject<Tarea | null>(null); 
constructor() { 
  this.cargarTareasIniciales();
  this.cargarTareasGuardadas();
}
  cargarTareasIniciales() {
    this.tareas = [
      { id: 1, name: "archivos", category: "gestión documentos", description: "gestion documentos", dateInit: new Date().toDateString()  , dateEnd: new Date().toDateString() , state: "proceso", active: false },
    ];
  }
  cargarTareasGuardadas() {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      this.tareas = JSON.parse
        (tareasGuardadas);
    }
  }
  guardarTareas() {
        localStorage.setItem('tareas', JSON.stringify(this.tareas));
  }
  getTareas(): Tarea[] {
    return this.tareas;
  }
  agregarTarea ( nuevaTarea: Tarea ) {
  const nuevoId = this.generarNuevoId();
    nuevaTarea.id = nuevoId;
  this.tareas.push(nuevaTarea);
  this.guardarTareas();
}
  eliminarTarea(id: number) {
    const index = this.tareas.findIndex(tarea => tarea.id === id);
  if (index !== -1) {
    this.tareas.splice(index, 1);
    this.guardarTareas();
  }    
  }
  actualizarTareaas (tarea)
  }
}
