import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';


@Component({
  selector: 'app-anotar-ingredientes',
  templateUrl: './anotar-ingredientes.component.html',
  styleUrls: ['./anotar-ingredientes.component.css']
})
export class AnotarIngredientesComponent implements OnInit {

  enviando: boolean;
  mensaje: string;

  constructor(private _location: Location) { }

  ngOnInit(): void {
  }


   /** Método que envía el mensaje y retorna al componente anterior */
   enviarMensaje() {
    this.enviando = true;

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
