import { Component, Input, OnInit } from '@angular/core';
import { Llamada } from 'src/app/modelo/llamada';

@Component({
  selector: 'app-item-llamada',
  templateUrl: './item-llamada.component.html',
  styleUrls: ['./item-llamada.component.css']
})
export class ItemLlamadaComponent implements OnInit {
  @Input() llamada: Llamada;

  constructor() { }

  ngOnInit(): void {
  }

  getClass() { // ojo a esto
    switch (this.llamada.estado) { 
      case 'en tránsito':
        return 'text-warn';
      case 'elevada':
        return 'text-red';
      case 'cerrada':
        return 'text-success';
    }
  }

}
