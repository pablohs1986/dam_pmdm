import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TareasComponent } from './tareas/tareas/tareas.component';

const routes: Routes = [
  {path: '', component: TareasComponent, pathMatch:'full'},
  {path: 'tareas', component: TareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
