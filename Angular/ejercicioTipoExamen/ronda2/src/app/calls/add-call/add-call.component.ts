import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CallModel } from 'src/app/model/call-model';
import { Calls } from 'src/app/model/calls';
import { CallServiceService } from 'src/app/services/call-service.service';

@Component({
  selector: 'app-add-call',
  templateUrl: './add-call.component.html',
  styleUrls: ['./add-call.component.css']
})
export class AddCallComponent implements OnInit {

  call: CallModel;

  constructor(private _router: Router, private _callService: CallServiceService) { 
  }

  ngOnInit(): void {
    this.call = this._callService.createEmptyCall();
  }

  addToEmptyCall() {
    let empresa: string = this.call.empresaDptoProyecto.toString();
    this.call.empresaDptoProyecto = empresa.split(',');

    Calls.addCall(this.call);
    this._router.navigate(['calls']); // redirige al listado de llamadas
  }

}
