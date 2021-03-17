import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

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

    setTimeout(() => {
      this.enviando = false;
      this.volverAtras();
    }, 2000); // simula un acceso a datos.
  }

  // Método que vuelve a la pantalla anterior.
  volverAtras() {
    this._location.back();
  }

}
