import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './inMemory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { CounterDisplayComponent } from './counter-display/counter-display.component';
import { CounterControlComponent } from './counter-control/counter-control.component';
import { CounterStatsDisplayComponent } from './counter-stats-display/counter-stats-display.component';
import { RotatingTextComponent } from './rotating-text/rotating-text.component';
import { EcommerceGridComponent } from './ecommerce-grid/ecommerce-grid.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterDisplayComponent,
    CounterControlComponent,
    CounterStatsDisplayComponent,
    RotatingTextComponent,
    EcommerceGridComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
