import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispositivoEdicaoComponent } from './dispositivo-edicao.component';

const routes: Routes = [{ path: '', component: DispositivoEdicaoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DispositivoEdicaoRoutingModule { }
