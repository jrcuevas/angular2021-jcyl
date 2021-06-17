import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolicitudComponent } from '../solicitud/solicitud.component';
import { SelectorCentroComponent } from '../selector-centro/selector-centro.component';
import { CentroComponent } from '../centro/centro.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    SolicitudComponent, 
    SelectorCentroComponent, 
    CentroComponent],
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule
  ]
})
export class SolicitudModule { }
