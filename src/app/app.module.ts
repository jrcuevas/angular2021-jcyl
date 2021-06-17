import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { CentroComponent } from './centro/centro.component';
import { SelectorCentroComponent } from './selector-centro/selector-centro.component';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';
import { ItemSolicitudComponent } from './item-solicitud/item-solicitud.component';
import { SolicitudModule } from './solicitud-module/solicitud.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { DatosBancariosCComponent } from './datos-bancarios-c/datos-bancarios-c.component';
import { Solicitud2Component } from './solicitud2/solicitud2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoSolicitudesComponent,
    ItemSolicitudComponent,
    DatosBancariosComponent,
    DatosBancariosCComponent,
    Solicitud2Component,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
