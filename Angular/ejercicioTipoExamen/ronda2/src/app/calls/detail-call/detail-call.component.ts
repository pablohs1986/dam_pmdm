import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CallModel } from 'src/app/model/call-model';
import { Calls } from 'src/app/model/calls';
import { CallServiceService } from 'src/app/services/call-service.service';

@Component({
  selector: 'app-detail-call',
  templateUrl: './detail-call.component.html',
  styleUrls: ['./detail-call.component.css']
})
export class DetailCallComponent implements OnInit {

  codIncidencia: string;
  callSeleccionada: CallModel;

  constructor(private _router: Router, private _route: ActivatedRoute, private _callService: CallServiceService) { 
    this.codIncidencia = _route.snapshot.paramMap.get('codIncidencia');
    this.callSeleccionada = this._callService.getCall(this.codIncidencia);
  }

  ngOnInit(): void {
  }

  elevarIncidencia(codIncidencia: string) {
    this._callService.upCall(codIncidencia);
    this._router.navigate(['calls']); // Cuando se pulsa el botón, redirige a la página calls, el listado de llamadas
  }

  cerrarIncidencia(codIncidencia: string) {
    this._callService.closeCall(codIncidencia);
    this._router.navigate(['calls']); // Cuando se pulsa el botón, redirige a la página calls, el listado de llamadas
  }


}
