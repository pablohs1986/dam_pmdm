import { Component } from '@angular/core';
import { Articulo } from './dto/articulo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: Array<Articulo>;

  constructor() {
    this.articulos = [
      new Articulo('Angular 4', 3, 'http://angular.io'),
      new Articulo('FullStack', 2, 'http://fullstack.io'),
      new Articulo('Blablabla', 1, 'http://blablabla.io'),
    ];
  }

  aniadirPeddit(titulo: HTMLInputElement, enlace: HTMLInputElement): boolean {
    this.articulos.push(new Articulo(titulo.value, 0, enlace.value));
    titulo.value = ''; // Limpia los inputs
    enlace.value = '';
    return false;
  }

  ordenarPeddits(): Array<Articulo> {
    return this.articulos.sort((a: Articulo, b: Articulo) => b.votos - a.votos);
  }
}
