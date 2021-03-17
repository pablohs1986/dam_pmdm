import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  enviando: boolean;
  mensaje: string;
  detalles: string;

  constructor(private _location: Location) { 
    this.enviando = false;
    this.mensaje = '';
  }

  ngOnInit(): void {
  }

  // Método que envía el mensaje y vuelve al componente anterior
  enviarMensaje() {
    this.enviando = true;
    this.detalles = 'Enviando mensaje...';

    setTimeout(() => { // Simula el acceso a datos... una vez pasa el tiepo, retorna el estado de enviando y vuelve atrás
      this.enviando = false;
      this.volverAtras();
    }, 2000)
  }

  // Método que navega hacia atrás
  volverAtras() { // Ojo que hace falta inyectar en el constructor el Location
    this._location.back();
  }

}
