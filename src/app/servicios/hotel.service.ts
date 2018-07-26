import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hotel } from './../modelos/hotel';

@Injectable()
export class HotelService {

  constructor(private http : HttpClient) { }


  public hoteles()
  {
    return this.http.get<Hotel[]>('/api/hotel');
  }

  public hotelesPorEstrella(estrellas)
  {
    return this.http.get<Hotel[]>('/api/hotel-estrellas/'+estrellas);
  }

  public hotelesPorNombre(nombre)
  {
    return this.http.get<Hotel[]>('/api/hotel-nombre/'+nombre);
  }

}
