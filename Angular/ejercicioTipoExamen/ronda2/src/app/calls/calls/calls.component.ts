import { Component, OnInit } from '@angular/core';
import { CallModel } from 'src/app/model/call-model';
import { Calls } from 'src/app/model/calls';
import { CallServiceService } from 'src/app/services/call-service.service';

@Component({
  selector: 'app-calls',
  templateUrl: './calls.component.html',
  styleUrls: ['./calls.component.css']
})
export class CallsComponent implements OnInit {

  calls: CallModel[];

  constructor(private _callService: CallServiceService) { }

  ngOnInit(): void {
    this.calls = this._callService.getCalls(); // Toma las llamadas del modelo
  }

}
