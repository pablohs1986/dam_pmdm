import { Component, OnInit } from '@angular/core';
import { Task } from '../dto/task';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  // private 
  tasks: Task[];

  constructor() {
    this.tasks = [
      { id: 1, title: 'Ejercicios Angular', pending: false },
      { id: 2, title: 'Actividad 2 SGE', pending: true },
      { id: 3, title: 'Proyecto EIE', pending: false }
    ];
  }

  ngOnInit(): void {
  }

  borrarTarea(tareaABorrar: Task) {
    this.tasks.splice(this.tasks.findIndex(t => tareaABorrar.id === t.id), 1);
  }
   

}
