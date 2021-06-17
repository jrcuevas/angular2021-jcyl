import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';
import { ItemSolicitudComponent } from './item-solicitud/item-solicitud.component';
import { SolicitudModule } from './solicitud-module/solicitud.module';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { DatosBancariosCComponent } from './datos-bancarios-c/datos-bancarios-c.component';
import { Solicitud2Component } from './solicitud2/solicitud2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotFoundComponent } from './not-found/not-found.component';
import { SharedModule } from './shared/shared.module';

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
    SharedModule,
    SolicitudModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
