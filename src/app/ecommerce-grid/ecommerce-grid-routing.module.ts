import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommerceGridComponent } from './ecommerce-grid.component';

const routes: Routes = [{ path: '', component: EcommerceGridComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceGridRoutingModule { }
