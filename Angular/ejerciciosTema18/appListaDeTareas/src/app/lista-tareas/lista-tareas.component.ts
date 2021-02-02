import { Component, OnInit } from '@angular/core';
import { Tarea } from '../dto/tarea';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  id = 0;
  tareas: Tarea[] = [];
  
  constructor() { }

  ngOnInit(): void {
  }

  borrarTarea(tareaABorrar: Tarea) {
    this.tareas.splice(this.tareas.findIndex(t => tareaABorrar.id === t.id), 1);
  }

  aniadirTarea() {
    let tituloTarea: string = prompt('Por favor, introduce un título para la tarea:');
    this.tareas.push({id: this.id++, titulo: tituloTarea, pendiente: true});
  }
}
