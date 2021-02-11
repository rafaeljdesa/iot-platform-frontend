import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidenavComponent } from './components/layout/sidenav/sidenav.component';
import { SidenavService } from './services/sidenav.service';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared/shared.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DispositivosService } from './services/dispositivos.service';
import { SimulacaoService } from './services/simulacao.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    SidenavService,
    DispositivosService,
    SimulacaoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
