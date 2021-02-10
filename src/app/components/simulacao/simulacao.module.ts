import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SimulacaoRoutingModule } from './simulacao-routing.module';
import { SimulacaoComponent } from './simulacao.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [SimulacaoComponent],
  imports: [
    CommonModule,
    SimulacaoRoutingModule,
    SharedModule
  ]
})
export class SimulacaoModule { }
