import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Centro } from '../comedor.modelo';

@Component({
  selector: 'app-centro',
  template: `<p>Nombre: {{centro.nombre}}</p>
              <p>Dirección: {{centro.direccion}}</p>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input() centro: Centro = {nombre: '', direccion: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
