import { Component, OnInit } from '@angular/core';
import { Task } from '../dto/task';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  // private 
  id = 0;
  tasks: Task[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  borrarTarea(tareaABorrar: Task) {
    this.tasks.splice(this.tasks.findIndex(t => tareaABorrar.id === t.id), 1);
  }
   
  aniadirTarea() {
    let titulo: string = prompt('Por favor, introduce un título para la tarea:');
    this.tasks.push({ id: this.id++, title: titulo, pending: true}) // Añade una nueva tarea
  }

}
