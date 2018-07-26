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

  public filtrarPorNombre(value)
  {
    if(value)
    {
      this.service.hotelesPorNombre(value).subscribe(ress => 
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
    const filter = this.estrellas[0] || this.estrellas[1] || this.estrellas[2] || this.estrellas[3] || this.estrellas[4];
     
    if(filter)
    {
      let starsStr = '';
      let i = 1;
      for (const star of this.estrellas) {
          if (star) {
              if ( starsStr === '' ) {
                  starsStr += i;
              }
              else {
                  starsStr = i  + 'y' + starsStr;
              }
          }
          i++;
      }
      console.log(starsStr);
      this.service.hotelesPorEstrella(starsStr).subscribe(ress => 
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
