import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colorSeleccionado: string;

  constructor() {
    this.colorSeleccionado = 'black';
  }

  generarColorAleatorio() {
    let numeroAleatorio:Number; // Poner la variable como local

    numeroAleatorio = Math.round(Math.random()*10000);

    this.colorSeleccionado = '#'+ numeroAleatorio;
  }
}
