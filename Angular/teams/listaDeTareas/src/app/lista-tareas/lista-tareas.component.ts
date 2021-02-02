import { Component, OnInit } from '@angular/core';
import { Task } from '../dto/task';

@Component({
  selector: 'app-lista-tareas',
  templateUrl: './lista-tareas.component.html',
  styleUrls: ['./lista-tareas.component.css']
})
export class ListaTareasComponent implements OnInit {
  tasks: Task[];

  constructor() {
    this.tasks = [
      { id: 1, title: 'Tarea 1', pending: true},
      { id: 2, title: 'Tarea 3', pending: false},
      { id: 3, title: 'Tarea 3', pending: true},
    ];
  }

  ngOnInit(): void {
  }

}
