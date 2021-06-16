import { Component, OnInit } from '@angular/core';
import { Solicitud } from '../comedor.modelo';

@Component({
  selector: 'app-solicitud2',
  templateUrl: './solicitud2.component.html',
  styleUrls: ['./solicitud2.component.css']
})
export class Solicitud2Component implements OnInit {

  solicitud: Solicitud;

  constructor() { 
    this.solicitud = {} as Solicitud;
  }

  ngOnInit(): void {
  }

  submit(){
    console.log(this.solicitud);
  }
}
