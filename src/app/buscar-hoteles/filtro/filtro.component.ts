import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../servicios/hotel.service';
import { Hotel } from '../../modelos/hotel';

@Component({
  selector: 'app-filtro',
  templateUrl: './filtro.component.html',
  styleUrls: ['./filtro.component.scss']
})
export class FiltroComponent implements OnInit {

  public estrellas: boolean [];
  public hoteles: Hotel[];
  public name : string ;

  constructor(private service: HotelService) 
  { 
    this.estrellas = [false, false, false, false, false];
    this.service.hoteles().subscribe(ress => 
      {
        this.hoteles=ress;
      });
  }

  public filtrarPorNombre(nombre : string)
  {
    if(nombre)
    {
      this.service.hotelesPorNombre(nombre).subscribe(ress => 
        {
          this.hoteles=ress;
        });
    }
    else
    {
      this.service.hoteles().subscribe(ress => 
        {
          this.hoteles=ress;
        });
    }
  
  }

  public filtrarPorEstrellas()
  {
    const filtrar = this.estrellas[0] || this.estrellas[1] || this.estrellas[2] || this.estrellas[3] || this.estrellas[4];
     
    if(filtrar)
    {
      let textoEstrellas = '';
      let i = 1;
      for (let estrella of this.estrellas) {
          if (estrella) 
          {
              if ( !textoEstrellas ) 
              {
                textoEstrellas += i;
              }
              else 
              {
                textoEstrellas = i  + 'y' + textoEstrellas;
              }
          }
          i++;
      }

      this.service.hotelesPorEstrella(textoEstrellas).subscribe(ress => 
        {
          this.hoteles=ress;
          
        });
    }
    else
    {
      this.service.hoteles().subscribe(ress => 
        {
          this.hoteles=ress;
        });
    }

  
    


  }

  ngOnInit()
  {

  }



}
