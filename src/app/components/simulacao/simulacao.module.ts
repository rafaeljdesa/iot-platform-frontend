import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulacaoRoutingModule } from './simulacao-routing.module';
import { SimulacaoComponent } from './simulacao.component';


@NgModule({
  declarations: [SimulacaoComponent],
  imports: [
    CommonModule,
    SimulacaoRoutingModule
  ]
})
export class SimulacaoModule { }
