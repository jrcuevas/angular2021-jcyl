import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-centro',
  template: `<p>Nombre: {{centro.nombre}}</p>
              <p>Dirección: {{centro.direccion}}</p>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  centro = {nombre: "Comedor público", direccion: "Calle Buenavista s/n"}

  constructor() { }

  ngOnInit(): void {
  }

}
