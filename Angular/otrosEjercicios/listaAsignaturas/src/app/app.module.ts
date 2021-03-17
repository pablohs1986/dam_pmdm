import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ItemAsignaturaComponent } from './asignaturas/item-asignatura/item-asignatura.component';
import { AsignaturasComponent } from './asignaturas/asignaturas/asignaturas.component';
import { DetailAsignaturaComponent } from './asignaturas/detail-asignatura/detail-asignatura.component';
import { AddAsignaturaComponent } from './asignaturas/add-asignatura/add-asignatura.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ItemAsignaturaComponent,
    AsignaturasComponent,
    DetailAsignaturaComponent,
    AddAsignaturaComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
