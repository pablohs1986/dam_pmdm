import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RecetasComponent } from './recetas/recetas/recetas.component';
import { DetailRecetaComponent } from './recetas/detail-receta/detail-receta.component';
import { AnotarIngredientesComponent } from './recetas/anotar-ingredientes/anotar-ingredientes.component';

const routes: Routes = [
  { path: '', component: RecetasComponent, pathMatch:'full' },
  { path: 'recetas', component: RecetasComponent },
  { path: 'anotar', component: AnotarIngredientesComponent },
  { path: 'recetas/:cod', component: DetailRecetaComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
