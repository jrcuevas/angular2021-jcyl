import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosBancariosCComponent } from './datos-bancarios-c/datos-bancarios-c.component';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';
import { SolicitudComponent } from './solicitud/solicitud.component';
import { Solicitud2Component } from './solicitud2/solicitud2.component';

const routes: Routes = [
  {path: '', component: ListadoSolicitudesComponent},
  {path: 'solicitud/:id', component: SolicitudComponent},
  {path: 'solicitud2', component: Solicitud2Component},
  {path: 'datos_bancarios', component: DatosBancariosComponent},
  {path: 'datos_bancarios_c', component: DatosBancariosCComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
