import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from '../comedor.modelo';

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  constructor() { 
    this.solicitudes = [{nombre: "Ana", apellidos: "Marin", nacimiento: new Date(1970, 1, 11)},
    {nombre: "Pedro", apellidos: "Cruzado", nacimiento: new Date(1971, 11, 30)},
    {nombre: "José Ramón", apellidos: "Cuevas Diez", nacimiento: new Date(1970, 1, 12)}]
  }

  ngOnInit(): void {
  }

  eliminarSolicitud($event: Solicitud){
    let index = this.solicitudes.indexOf($event);
    this.solicitudes.splice(index, 1);
  }

}
