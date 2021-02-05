import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DispositivosRoutingModule } from './dispositivos-routing.module';
import { DispositivosComponent } from './dispositivos.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';

@NgModule({
  declarations: [DispositivosComponent],
  imports: [
    CommonModule,
    DispositivosRoutingModule,
    SharedModule
  ]
})
export class DispositivosModule { }
