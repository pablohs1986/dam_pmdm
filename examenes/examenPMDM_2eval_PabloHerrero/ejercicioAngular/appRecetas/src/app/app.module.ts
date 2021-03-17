import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RecetaComponent } from './recetas/receta/receta.component';
import { RecetasComponent } from './recetas/recetas/recetas.component';
import { NavRecetasComponent } from './recetas/recetas/ui/nav-recetas/nav-recetas.component';
import { CabeceraComponent } from './recetas/recetas/ui/cabecera/cabecera.component';
import { DetailRecetaComponent } from './recetas/detail-receta/detail-receta.component';
import { AppRoutingModule } from './app-routing.module';
import { AnotarIngredientesComponent } from './recetas/anotar-ingredientes/anotar-ingredientes.component';

@NgModule({
  declarations: [
    AppComponent,
    RecetaComponent,
    RecetasComponent,
    NavRecetasComponent,
    CabeceraComponent,
    DetailRecetaComponent,
    AnotarIngredientesComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
