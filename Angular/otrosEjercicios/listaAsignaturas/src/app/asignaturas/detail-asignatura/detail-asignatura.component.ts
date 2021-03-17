import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Asignatura } from 'src/app/model/asignatura';
import { Asignaturas } from 'src/app/model/asignaturas';

@Component({
  selector: 'app-detail-asignatura',
  templateUrl: './detail-asignatura.component.html',
  styleUrls: ['./detail-asignatura.component.css']
})
export class DetailAsignaturaComponent implements OnInit {

  idAsignatura: number;
  asignaturaSeleccionada: Asignatura;

  constructor(private _router: Router, private _route: ActivatedRoute) { 
    this.idAsignatura = parseInt(_route.snapshot.paramMap.get('id'));
    this.asignaturaSeleccionada = Asignaturas.getAsignatura(this.idAsignatura);
  }

  ngOnInit(): void {
  }

  aprobarAsignatura(idAsignatura: number) {
    Asignaturas.cerrarAsignatura(idAsignatura);
    this._router.navigate(['asignaturas']);
  }

  onBorrar() {
    Asignaturas.deleteAsignatura(this.asignaturaSeleccionada.id);
    this._router.navigate(['asignaturas']);
  }
}
