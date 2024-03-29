import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from './comedor.modelo';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  constructor(private httpClient: HttpClient) { }

  public conseguirSolicitudes(): Solicitud[]{
    return [{nombre: "Ana", apellidos: "Marin", nacimiento: new Date(1970, 1, 11)},
    {nombre: "Pedro", apellidos: "Cruzado", nacimiento: new Date(1971, 11, 30)},
    {nombre: "José Ramón", apellidos: "Cuevas Diez", nacimiento: new Date(1970, 1, 12)}];
  }

  public getSolicitudes(): Observable<Object[]>{
    //const accessToken = 'w553KmY_mhtkpRngkuh6qoYMPc-McVjwAjSNbQ0IxNs';
    const accessToken = 'w553KmY_mhtkpRngkuh6qoYMPc-McVjwAjSNbQ0IxNs';
    return this.httpClient.get<any>(
      `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`);
  }
}
