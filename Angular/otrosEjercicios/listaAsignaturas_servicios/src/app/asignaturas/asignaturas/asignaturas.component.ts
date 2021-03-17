import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/model/asignatura';
import { Asignaturas } from 'src/app/model/asignaturas';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-asignaturas',
  templateUrl: './asignaturas.component.html',
  styleUrls: ['./asignaturas.component.css']
})
export class AsignaturasComponent implements OnInit {

  asignaturas: Asignatura[];

  constructor(private asignaturasService: AsignaturaService) {}

  ngOnInit(): void {
    this.asignaturas = this.asignaturasService.getAsignaturas();
  }

  

}
