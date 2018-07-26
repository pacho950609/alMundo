import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscarHotelesRoutingModule } from './buscar-hoteles-routing.module';
import { HotelesComponent } from './hoteles/hoteles.component';
import { FiltroComponent } from './filtro/filtro.component';

@NgModule({
  imports: [
    CommonModule,
    BuscarHotelesRoutingModule,
    FormsModule
  ],
  declarations: [HotelesComponent, FiltroComponent]
})
export class BuscarHotelesModule { }
