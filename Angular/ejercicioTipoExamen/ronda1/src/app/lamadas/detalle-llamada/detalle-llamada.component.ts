import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Llamada } from 'src/app/modelo/llamada';
import { Llamadas } from 'src/app/modelo/llamadas';

@Component({
  selector: 'app-detalle-llamada',
  templateUrl: './detalle-llamada.component.html',
  styleUrls: ['./detalle-llamada.component.css']
})
export class DetalleLlamadaComponent implements OnInit {

  codigoIncidencia: string;
  llamadaSeleccionada: Llamada;

  constructor(private _router: Router, private _route: ActivatedRoute) { } // ojooo

  ngOnInit(): void {
    this.codigoIncidencia = this._route.snapshot.paramMap.get('cod'); // Recoge el nombre de la url
    this.llamadaSeleccionada = Llamadas.getLlamada(this.codigoIncidencia);
  }

  elevarIncidencia(codigoIncidencia: string) {
    Llamadas.upCall(codigoIncidencia);
    this._router.navigate(['llamadas']);
  }

  cerrarIncidencia(codigoIncidencia: string) {
    Llamadas.closeLlamada(codigoIncidencia);
    this._router.navigate(['llamadas']);
  }

}
