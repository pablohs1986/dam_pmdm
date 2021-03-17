import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Componente1Component } from './componente1/componente1.component';
import { Componente2Component } from './componente2/componente2.component';
import { Componente3Component } from './componente3/componente3.component';

const routes: Routes = [
  {path: '', component: Componente1Component, pathMatch: 'full'},
  {path: 'home', component: Componente1Component},
  {path: 'dos', component: Componente2Component},
  {path: 'tres', component: Componente3Component},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
