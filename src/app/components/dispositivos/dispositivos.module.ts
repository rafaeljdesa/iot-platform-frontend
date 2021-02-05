import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivosRoutingModule } from './dispositivos-routing.module';
import { DispositivosComponent } from './dispositivos.component';


@NgModule({
  declarations: [DispositivosComponent],
  imports: [
    CommonModule,
    DispositivosRoutingModule
  ]
})
export class DispositivosModule { }
