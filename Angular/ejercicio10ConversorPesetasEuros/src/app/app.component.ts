import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pesetasQueValeUnEuro: number;
  resultadoEuros;
  resultadoPesetas;

  constructor() {
    this.pesetasQueValeUnEuro = 166.386;
  }

  convertirPesetasAEuros(pesetas: HTMLInputElement) {
    if(isNaN(Number(pesetas.value))) {
      alert('Pesetas debe ser un número.');
      return false; // Evitan que recargue la página

    } else {
      this.resultadoEuros = (Number(pesetas.value) / this.pesetasQueValeUnEuro).toFixed(2);
      return false;
    }
  }

  convertirEurosAPesetas(euros: HTMLInputElement) {
    if(isNaN(Number(euros.value))) {
      alert('Pesetas debe ser un número.');
      return false;
    } else {
      this.resultadoPesetas = (Number(euros.value) * this.pesetasQueValeUnEuro).toFixed(2);
      return false;
    }
  }

}
