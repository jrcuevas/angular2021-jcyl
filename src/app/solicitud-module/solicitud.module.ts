import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { SelectorCentroComponent } from '../selector-centro/selector-centro.component';
import { CentroComponent } from '../centro/centro.component';



@NgModule({
  declarations: [SolicitudComponent, SelectorCentroComponent, CentroComponent],
  imports: [
    CommonModule
  ]
})
export class SolicitudModule { }
