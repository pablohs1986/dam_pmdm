import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';
import { Tareas } from 'src/app/model/tareas';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent implements OnInit {

  tareas: Tarea[];

  constructor() { }

  ngOnInit(): void {
    this.tareas = Tareas.getTareas();
    console.log(this.tareas);
  }

  borrarTarea(tarea: Tarea) {
    Tareas.deleteTarea(tarea.id);
  }

}
