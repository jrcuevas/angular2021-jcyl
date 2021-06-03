import { Component, OnInit } from '@angular/core';
import { Centro, Solicitud } from '../comedor.modelo';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  color:string = ''

  centro: Centro = {nombre: "Comedor Público", direccion: "Calle Buenavista s/n"};

  solicitudes = [{nombre: "Ana", apellidos: "Marin", nacimiento: new Date(1970, 1, 11)},
              {nombre: "Pedro", apellidos: "Cruzado", nacimiento: new Date(1971, 11, 30)},
              {nombre: "José Ramón", apellidos: "Cuevas Diez", nacimiento: new Date(1970, 1, 12)}]

  solicitud: Solicitud = {} as Solicitud;

  constructor() {
    setInterval(() => {
      this.color = '' + Math.random(); }, 2000)
  }

  ngOnInit(): void {
  }

  actualizaNombre($event:KeyboardEvent){
    const element = $event.target as HTMLInputElement
    this.solicitud.nombre = element.value
  }

  actualizaApellidos($apellidos:string){
    this.solicitud.apellidos = $apellidos
  }

  enviar(){
    console.log(`Nombre: ${this.solicitud.nombre}`)
    console.log(`Àpellidos: ${this.solicitud.apellidos}`)
  }

  saludo(){
    console.log(`Hola ${this.solicitud.nombre}`);
  }
}
