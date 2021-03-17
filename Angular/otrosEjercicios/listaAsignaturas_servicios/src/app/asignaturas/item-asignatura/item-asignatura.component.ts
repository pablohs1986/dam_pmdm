import { Component, Input, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/model/asignatura';

@Component({
  selector: 'app-item-asignatura',
  templateUrl: './item-asignatura.component.html',
  styleUrls: ['./item-asignatura.component.css']
})
export class ItemAsignaturaComponent implements OnInit {

  @Input() asignatura: Asignatura;

  constructor() { }

  ngOnInit(): void {
  }

  getClass() {
    switch (this.asignatura.aprobada) {
      case true:
        return 'text-success';
      case false:
        return 'text-red';
    }
  }

 

}
