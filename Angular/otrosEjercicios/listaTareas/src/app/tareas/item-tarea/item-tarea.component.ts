import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tarea } from 'src/app/model/tarea';

@Component({
  selector: 'app-item-tarea',
  templateUrl: './item-tarea.component.html',
  styleUrls: ['./item-tarea.component.css']
})
export class ItemTareaComponent implements OnInit {

  @Input() tarea: Tarea;
  @Output() borrar = new EventEmitter<Tarea>();

  constructor() { }

  ngOnInit(): void {
  }

  onBorrar(){
    this.borrar.emit(this.tarea); // emite al padre 
  }

}
