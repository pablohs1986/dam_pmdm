import { Component, Input, OnInit } from '@angular/core';
import { Receta } from 'src/app/model/receta';
import { Recetas } from 'src/app/model/recetas';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.css']
})
export class RecetaComponent implements OnInit {

  @Input() receta: Receta;

  constructor() { }

  ngOnInit(): void {
  }

  incrementarVoto(receta: Receta) {
    Recetas.upReceta(receta);
  };

  disminuirVoto(receta: Receta) {
    Recetas.downReceta(receta);
    return false;
  };

}
