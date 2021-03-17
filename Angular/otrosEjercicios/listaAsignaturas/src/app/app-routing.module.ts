import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAsignaturaComponent } from './asignaturas/add-asignatura/add-asignatura.component';
import { AsignaturasComponent } from './asignaturas/asignaturas/asignaturas.component';
import { DetailAsignaturaComponent } from './asignaturas/detail-asignatura/detail-asignatura.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'addAsignatura', component: AddAsignaturaComponent },
  { path: 'asignaturas', component: AsignaturasComponent },
  { path: 'asignaturas/:id', component: DetailAsignaturaComponent },
  { path: '**', redirectTo: 'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
