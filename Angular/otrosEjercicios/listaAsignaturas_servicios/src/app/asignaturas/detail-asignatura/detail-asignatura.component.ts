import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/model/asignatura';
import { Asignaturas } from 'src/app/model/asignaturas';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-detail-asignatura',
  templateUrl: './detail-asignatura.component.html',
  styleUrls: ['./detail-asignatura.component.css']
})
export class DetailAsignaturaComponent implements OnInit {

  idAsignatura: number;
  asignaturaSeleccionada: Asignatura;

  constructor(private _router: Router, private _route: ActivatedRoute, private asignaturasService: AsignaturaService) { 
    this.idAsignatura = parseInt(_route.snapshot.paramMap.get('id'));
    this.asignaturaSeleccionada = this.asignaturasService.getAsignatura(this.idAsignatura);
  }

  ngOnInit(): void {
  }

  aprobarAsignatura(idAsignatura: number) {
    this.asignaturasService.cerrarAsignatura(idAsignatura);
    this._router.navigate(['asignaturas']);
  }

  onBorrar() {
    this.asignaturasService.deleteAsignatura(this.asignaturaSeleccionada.id);
    this._router.navigate(['asignaturas']);
  }
}
