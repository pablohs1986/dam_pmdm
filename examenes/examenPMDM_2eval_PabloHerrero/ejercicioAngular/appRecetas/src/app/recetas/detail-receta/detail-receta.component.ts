import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Ingrediente } from 'src/app/model/ingrediente';
import { Receta } from 'src/app/model/receta';
import { Recetas } from 'src/app/model/recetas';
import { Location } from '@angular/common';


@Component({
  selector: 'app-detail-receta',
  templateUrl: './detail-receta.component.html',
  styleUrls: ['./detail-receta.component.css']
})
export class DetailRecetaComponent implements OnInit {

  codReceta: number;
  recetaSeleccionada: Receta;
  nuevoIngrediente: Ingrediente;

  constructor(private _router: Router, private _route: ActivatedRoute, private _location: Location) { 
    this.codReceta = parseInt(_route.snapshot.paramMap.get('cod'));
    this.recetaSeleccionada = Recetas.getReceta(this.codReceta);
  }

  ngOnInit(): void {
  }

  aniadirIngrediente(){
    Recetas.addIngrediente(this.recetaSeleccionada, this.nuevoIngrediente);
  }

  volverAtras() {
    this._location.back();
  }

}
