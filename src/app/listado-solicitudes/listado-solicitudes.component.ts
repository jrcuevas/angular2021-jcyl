import { Component, Input, OnInit } from '@angular/core';
import { Solicitud } from '../comedor.modelo';
import { SolicitudesService } from '../solicitudes.service';

@Component({
  selector: 'app-listado-solicitudes',
  templateUrl: './listado-solicitudes.component.html',
  styleUrls: ['./listado-solicitudes.component.css']
})
export class ListadoSolicitudesComponent implements OnInit {

  solicitudes: Solicitud[] = [];

  constructor(private solicitudesService: SolicitudesService) {
  }

  ngOnInit(): void {
    this.solicitudes = this.solicitudesService.conseguirSolicitudes();
    //this.solicitudesService.getSolicitudes().then((x)=>console.log(x));
  }

  eliminarSolicitud($event: Solicitud){
    let index = this.solicitudes.indexOf($event);
    this.solicitudes.splice(index, 1);
  }
  
  getSolicitudes(){
    return this.solicitudesService.getSolicitudes();
    // this.solicitudesService.getSolicitudes().toPromise().then((x)=>console.log(x))
  }

}
