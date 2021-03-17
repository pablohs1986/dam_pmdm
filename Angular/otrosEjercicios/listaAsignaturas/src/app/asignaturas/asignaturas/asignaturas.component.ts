import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/model/asignatura';
import { Asignaturas } from 'src/app/model/asignaturas';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: Asignatura[];

  constructor() {}

  ngOnInit(): void {
    this.asignaturas = Asignaturas.getAsignaturas();
  }

  

}
