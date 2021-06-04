import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';
import { SolicitudComponent } from './solicitud/solicitud.component';

const routes: Routes = [
  {path: '', component: ListadoSolicitudesComponent},
  {path: 'solicitud', component: SolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
