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

@NgModule({
  declarations: [
    AppComponent,
    ListadoSolicitudesComponent,
    ItemSolicitudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SolicitudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
