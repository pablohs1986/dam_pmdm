import { Component, Input, OnInit } from '@angular/core';
import { Articulo } from '../dto/articulo';

@Component({
  selector: 'app-peddit',
  templateUrl: './peddit.component.html',
  styleUrls: ['./peddit.component.css']
})
export class PedditComponent implements OnInit {
  @Input() articulo: Articulo;


  constructor() {
    this.articulo = new Articulo('Angular 4', 10, 'http://angular.io');
  }

  ngOnInit(): void {
  }

  votoArriba(): boolean {
    this.articulo.votoArriba();
    return false; // para evitar que propague
  }

  votoAbajo(): boolean {
    this.articulo.votoAbajo();
    return false;
  }

}
