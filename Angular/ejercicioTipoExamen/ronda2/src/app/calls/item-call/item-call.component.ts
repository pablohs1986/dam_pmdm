import { Component, Input, OnInit } from '@angular/core';
import { CallModel } from 'src/app/model/call-model';

@Component({
  selector: 'app-item-call',
  templateUrl: './item-call.component.html',
  styleUrls: ['./item-call.component.css']
})
export class ItemCallComponent implements OnInit {
  
  @Input() call: CallModel;

  constructor() { }

  ngOnInit(): void {
  }

  getClass() {
    switch (this.call.estado) {
      case 'en tránsito':
        return 'text-warn';
      case 'elevada':
        return 'text-red';
      case 'cerrada':
        return 'text-success';
    }
  }

}
