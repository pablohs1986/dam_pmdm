import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/model/receta';

@Component({
  selector: 'app-nav-recetas',
  templateUrl: './nav-recetas.component.html',
  styleUrls: ['./nav-recetas.component.css']
})
export class NavRecetasComponent implements OnInit {

  titulo: string;
  contadorRecetas: number;

  constructor() { 
    this.titulo = "Recetas";
    this.contadorRecetas = Receta.numeroRecetas;
  }

  ngOnInit(): void {
  }

}
