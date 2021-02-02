import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from '../dto/tarea';

@Component({
  selector: 'app-detalle-tarea',
  templateUrl: './detalle-tarea.component.html',
  styleUrls: ['./detalle-tarea.component.css']
})
export class DetalleTareaComponent implements OnInit {
  @Input() tarea: Tarea;
  @Output() borrar = new EventEmitter<Tarea>();

  constructor() { }

  ngOnInit(): void {
  }

  onBorrarTarea() {
    this.borrar.emit(this.tarea);
  }


}
