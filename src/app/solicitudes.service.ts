import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
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

  public getSolicitudes(): any{
    const accessToken = 'w553KmY_mhtkpRngkuh6qoYMPc-McVjwAjSNbQ0IxNs';
    return this.httpClient.get(
      `https://cdn.contentful.com/spaces/im9x7su136k8/environments/master/entries?access_token=${accessToken}`)
      .toPromise();
  }
}
