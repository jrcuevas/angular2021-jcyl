import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  {path: '', component: ListadoSolicitudesComponent},
  {path: 'solicitud/:id', component: SolicitudComponent},
  {path: 'datos_bancarios', component: DatosBancariosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
