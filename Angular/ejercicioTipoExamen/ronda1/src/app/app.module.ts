import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ItemLlamadaComponent } from './lamadas/item-llamada/item-llamada.component';
import { LlamadasComponent } from './lamadas/llamadas.component';
import { NavbarLlamadasComponent } from './lamadas/ui/navbar-llamadas/navbar-llamadas.component';
import { ContactoComponent } from './contacto/contacto.component';
import { DetalleLlamadaComponent } from './lamadas/detalle-llamada/detalle-llamada.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ItemLlamadaComponent,
    LlamadasComponent,
    NavbarLlamadasComponent,
    ContactoComponent,
    DetalleLlamadaComponent
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
