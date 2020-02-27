import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RotatingTextComponent } from './rotating-text.component';

const routes: Routes = [{ path: '', component: RotatingTextComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RotatingTextRoutingModule { }
