import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './authentication.guard';
import { DatosBancariosCComponent } from './datos-bancarios-c/datos-bancarios-c.component';
import { DatosBancariosComponent } from './datos-bancarios/datos-bancarios.component';
import { ListadoSolicitudesComponent } from './listado-solicitudes/listado-solicitudes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { Solicitud2Component } from './solicitud2/solicitud2.component';

const routes: Routes = [
  { path: '', component: ListadoSolicitudesComponent, canActivate: [AuthenticationGuard] },
  {
    path: 'solicitud', loadChildren: () =>
      import('./solicitud-module/solicitud.module').then(m => m.SolicitudModule)
  },
  { path: 'solicitud2', component: Solicitud2Component },
  { path: 'datos_bancarios', component: DatosBancariosComponent },
  { path: 'datos_bancarios_c', component: DatosBancariosCComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
