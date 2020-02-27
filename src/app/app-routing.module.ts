import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { RotatingTextComponent } from './rotating-text/rotating-text.component';
import { EcommerceGridComponent } from './ecommerce-grid/ecommerce-grid.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  },
  {
    path: 'counter',
    loadChildren: () => import('./counter/counter.module').then(m => m.CounterModule)
  },
  {
    path: 'ecommerce-grid',
    loadChildren: () => import('./ecommerce-grid/ecommerce-grid.module').then(m => m.EcommerceGridModule)
  },
  {
    path: 'rotating-text',
    loadChildren: () => import('./rotating-text/rotating-text.module').then(m => m.RotatingTextModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
