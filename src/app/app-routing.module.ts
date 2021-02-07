import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },  
  { path: 'pagina-nao-encontrada', loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'home', data: { title: 'IOT Platform' }, loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: 'dispositivos', data: { title: 'Dispositivos' }, loadChildren: () => import('./components/dispositivos/dispositivos.module').then(m => m.DispositivosModule) },
  { path: 'dispositivos/adicionar', data: { title: 'Adicionar dispositivo' }, loadChildren: () => import('./components/dispositivo-edicao/dispositivo-edicao.module').then(m => m.DispositivoEdicaoModule) },
  { path: 'dispositivos/:id', data: { title: 'Dispositivo' }, loadChildren: () => import('./components/dispositivo-edicao/dispositivo-edicao.module').then(m => m.DispositivoEdicaoModule) },
  { path: 'localizacao', data: { title: 'Localização' }, loadChildren: () => import('./components/localizacao/localizacao.module').then(m => m.LocalizacaoModule) },
  { path: 'simulacao', data: { title: 'Simulação' }, loadChildren: () => import('./components/simulacao/simulacao.module').then(m => m.SimulacaoModule) },
  { path: 'eventos', data: { title: 'Eventos' }, loadChildren: () => import('./components/eventos/eventos.module').then(m => m.EventosModule) },
  { path: '**',   redirectTo: '/pagina-nao-encontrada' },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
