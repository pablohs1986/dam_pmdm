import { Component, OnInit } from '@angular/core';
import { Receta } from 'src/app/model/receta';
import { Recetas } from 'src/app/model/recetas';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.component.html',
  styleUrls: ['./recetas.component.css']
})
export class RecetasComponent implements OnInit {

  recetas: Receta[];

  constructor() { }

  ngOnInit(): void {
    this.recetas = Recetas.getRecetas();
  }

}
