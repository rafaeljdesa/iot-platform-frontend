import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: '',   redirectTo: '/home', pathMatch: 'full' },  
  { path: 'page-not-found', loadChildren: () => import('./components/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule) },
  { path: 'home', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) },
  { path: '**',   redirectTo: '/page-not-found' },  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
