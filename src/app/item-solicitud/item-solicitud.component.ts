import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Solicitud } from '../comedor.modelo';

@Component({
  selector: 'app-item-solicitud',
  templateUrl: './item-solicitud.component.html',
  styleUrls: ['./item-solicitud.component.css']
})
export class ItemSolicitudComponent implements OnInit {

  @Input() solicitud: Solicitud = {} as Solicitud;
  @Output() eliminar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  eliminarSolicitud(solicitud: Solicitud){
    this.eliminar.emit(solicitud);
  }
}
