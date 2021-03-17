import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { NavbarComponent } from './ui/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ItemCallComponent } from './calls/item-call/item-call.component';
import { CallsComponent } from './calls/calls/calls.component';
import { NavbarCallsComponent } from './calls/ui/navbar-calls/navbar-calls.component';
import { ContactComponent } from './contact/contact.component';
import { DetailCallComponent } from './calls/detail-call/detail-call.component';
import { AddCallComponent } from './calls/add-call/add-call.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    HomeComponent,
    ItemCallComponent,
    CallsComponent,
    NavbarCallsComponent,
    ContactComponent,
    DetailCallComponent,
    AddCallComponent
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
