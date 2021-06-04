import { Injectable } from '@angular/core';
import { Solicitud } from './comedor.modelo';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor() { }

  public conseguirSolicitudes(): Solicitud[]{
    return [{nombre: "Ana", apellidos: "Marin", nacimiento: new Date(1970, 1, 11)},
    {nombre: "Pedro", apellidos: "Cruzado", nacimiento: new Date(1971, 11, 30)},
    {nombre: "José Ramón", apellidos: "Cuevas Diez", nacimiento: new Date(1970, 1, 12)}];
  }
}
