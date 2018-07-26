import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltroComponent } from './filtro/filtro.component';

const routes: Routes = [
  {
    path: 'buscar',
    component : FiltroComponent 
  }
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscarHotelesRoutingModule { }
