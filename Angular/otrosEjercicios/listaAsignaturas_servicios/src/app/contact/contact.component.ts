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
  detalles: string; // para mostrar mientras se envía el mensaje

  constructor(private _location: Location) { 
    this.enviando = false;
    this.mensaje = '';
  }

  ngOnInit(): void {
  }

  /** Método que envía el mensaje y retorna al componente anterior */
  enviarMensaje() {
    this.enviando = true;
    this.detalles = "Enviando el mensaje..."

    setTimeout(() => { // simula un envío de mensaje
      this.enviando = false;
      this.volverAtras();
    }, 2000);
  }

  /** Método que retorna a la página anterior */
  volverAtras() {
    this._location.back();
  }

}
