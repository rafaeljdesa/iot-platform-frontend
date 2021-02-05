import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SimulacaoComponent } from './simulacao.component';

const routes: Routes = [{ path: '', component: SimulacaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SimulacaoRoutingModule { }
