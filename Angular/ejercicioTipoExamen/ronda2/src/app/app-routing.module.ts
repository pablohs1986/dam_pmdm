import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCallComponent } from './calls/add-call/add-call.component';
import { CallsComponent } from './calls/calls/calls.component';
import { DetailCallComponent } from './calls/detail-call/detail-call.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'calls', component: CallsComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'calls/addCall', component: AddCallComponent}, // ojoo a la carpeta
  {path: 'calls/:codIncidencia', component: DetailCallComponent}, // ojoooo
  {path: '**', redirectTo: 'home'} // Ojoooo
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
