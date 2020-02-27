import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CounterComponent } from './counter/counter.component';
import { RotatingTextComponent } from './rotating-text/rotating-text.component';
import { EcommerceGridComponent } from './ecommerce-grid/ecommerce-grid.component';


const routes: Routes = [
  {
    path: '',
    component: CounterComponent
  },
  {
    path: 'counter',
    component: CounterComponent
  },
  {
    path: 'rotating-text',
    component: RotatingTextComponent
  },
  {
    path: 'ecommerce-grid',
    component: EcommerceGridComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
