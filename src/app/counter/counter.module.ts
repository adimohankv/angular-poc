import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter.component';
import { CounterDisplayComponent } from '../counter-display/counter-display.component';
import { CounterControlComponent } from '../counter-control/counter-control.component';
import { CounterStatsDisplayComponent } from '../counter-stats-display/counter-stats-display.component';


@NgModule({
  declarations: [
    CounterComponent,
    CounterDisplayComponent,
    CounterControlComponent,
    CounterStatsDisplayComponent
  ],
  imports: [
    CommonModule,
    CounterRoutingModule
  ]
})
export class CounterModule { }
