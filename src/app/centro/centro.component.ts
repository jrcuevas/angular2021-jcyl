import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Centro } from '../comedor.modelo';

@Component({
  selector: 'app-centro',
  template: `<div class="wrap">
                <span>Nombre: {{centro.nombre}}</span><br>
                <span>Dirección: {{centro.direccion}}</span>
             </div>`,
  styleUrls: ['./centro.component.css']
})
export class CentroComponent implements OnInit {

  @Input() centro: Centro = {nombre: '', direccion: ''};

  constructor() { }

  ngOnInit(): void {
  }

}
