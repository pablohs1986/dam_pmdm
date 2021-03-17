import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Asignatura } from 'src/app/model/asignatura';
import { Asignaturas } from 'src/app/model/asignaturas';

@Component({
  selector: 'app-add-asignatura',
  templateUrl: './add-asignatura.component.html',
  styleUrls: ['./add-asignatura.component.css']
})
export class AddAsignaturaComponent implements OnInit {

  nuevaAsignatura: Asignatura;

  constructor(private _router: Router) { 
    this.nuevaAsignatura = Asignaturas.crearAsignaturaVacia();
  }

  ngOnInit(): void {
  }

  aniadirAsignatura() {
    Asignaturas.addAsignatura(this.nuevaAsignatura);
    this._router.navigate(['/asignaturas']);
  }

}
