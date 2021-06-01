import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

  color:string = ''

  solicitud = {nombre: "José Ramón", apellidos: "Cuevas Diez"};

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
