import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../dto/task';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  @Input() tarea: Task;
  @Output() borrar = new EventEmitter<Task>(); // Ojo con el import

  constructor() { }

  ngOnInit(): void {
  }

  onBorrarTarea(){
    this.borrar.emit(this.tarea);
  }

}
