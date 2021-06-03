import { NULL_EXPR, NUMBER_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Centro } from '../comedor.modelo';

@Component({
  selector: 'app-selector-centro',
  templateUrl: './selector-centro.component.html',
  styleUrls: ['./selector-centro.component.css']
})
export class SelectorCentroComponent implements OnInit {

  centros: Centro[] = [{nombre: "Fernando de Rojas", direccion: "Algún Lugar"},
                       {nombre: "Agustinas", direccion: "Otro Lugar"}];

  centrosFiltrados: Centro[] = [];

  centroSeleccionado: Centro = {nombre: "", direccion: ""};

  constructor() { }

  ngOnInit(): void {
  }

  filtraCentros($event: KeyboardEvent){
    const element = $event.target as HTMLInputElement;
    const valor:string = element?.value;
    if (!valor){
      this.centrosFiltrados = [];
      return;
    }
    this.centrosFiltrados = this.centros.filter(centro => {
      return centro.nombre.includes(valor);
    });
  }

  seleccionarCentro(centro: Centro, campo: HTMLInputElement){
    this.centroSeleccionado = centro;
    campo.value = this.centroSeleccionado.nombre;
    this.centrosFiltrados = [];
  }

}
