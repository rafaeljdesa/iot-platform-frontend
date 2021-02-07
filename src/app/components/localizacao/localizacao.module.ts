import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LocalizacaoRoutingModule } from './localizacao-routing.module';
import { LocalizacaoComponent } from './localizacao.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [LocalizacaoComponent],
  imports: [
    CommonModule,
    LocalizacaoRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: environment.GOOGLE_MAPS_KEY
    })
  ]
})
export class LocalizacaoModule { }
