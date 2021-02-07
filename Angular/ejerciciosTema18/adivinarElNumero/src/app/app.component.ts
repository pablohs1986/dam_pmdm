import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numeroUsuario: number;
  numeroSecreto: number;
  contadorIntentos: number;
  desviacion: number;

  ngOnInit() {
    this.iniciarJuego();
  }

  iniciarJuego(){
    this.numeroSecreto = Math.round(Math.random()*999+1);
    this.numeroUsuario = null;
    this.contadorIntentos = null;
    this.desviacion = null;
    console.log("Número secreto, shhhhh....: " + this.numeroSecreto);
  }

  comprobarNumero() {
    this.contadorIntentos++;
    this.desviacion = this.numeroSecreto - this.numeroUsuario;
  }




}
