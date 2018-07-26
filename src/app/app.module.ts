import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import { BuscarHotelesModule } from './buscar-hoteles/buscar-hoteles.module';
import { HotelService } from './servicios/hotel.service';


@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BuscarHotelesModule,
    HttpClientModule
  ],
  providers: [HotelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
