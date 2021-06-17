import { NgModule } from '@angular/core';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { SelectorCentroComponent } from '../selector-centro/selector-centro.component';
import { CentroComponent } from '../centro/centro.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{path: ':id', component: SolicitudComponent}];

@NgModule({
  declarations: [
    SolicitudComponent, 
    SelectorCentroComponent, 
    CentroComponent],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SolicitudModule { }
