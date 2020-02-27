import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RotatingTextRoutingModule } from './rotating-text-routing.module';
import { RotatingTextComponent } from './rotating-text.component';


@NgModule({
  declarations: [RotatingTextComponent],
  imports: [
    CommonModule,
    RotatingTextRoutingModule
  ]
})
export class RotatingTextModule { }
