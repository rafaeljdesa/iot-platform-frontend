import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivoEdicaoRoutingModule } from './dispositivo-edicao-routing.module';
import { DispositivoEdicaoComponent } from './dispositivo-edicao.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';


@NgModule({
  declarations: [DispositivoEdicaoComponent],
  imports: [
    CommonModule,
    DispositivoEdicaoRoutingModule,
    SharedModule
  ]
})
export class DispositivoEdicaoModule { }
