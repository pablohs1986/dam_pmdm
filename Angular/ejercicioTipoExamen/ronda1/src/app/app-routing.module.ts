import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { DetalleLlamadaComponent } from './lamadas/detalle-llamada/detalle-llamada.component';
import { LlamadasComponent } from './lamadas/llamadas.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'llamadas', component: LlamadasComponent},
  {path: 'contacto', component: ContactoComponent},
  {path: 'llamadas/:cod', component: DetalleLlamadaComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
