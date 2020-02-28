import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from '../../data/inMemory-data.service';
import { EcommerceGridRoutingModule } from './ecommerce-grid-routing.module';
import { EcommerceGridComponent } from './ecommerce-grid.component';
import { SortPipe } from './pipes/sort.pipe';
import { EcommerceService } from './services/ecommerce.service';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    EcommerceGridComponent,
    SortPipe
  ],
  imports: [
    CommonModule,
    EcommerceGridRoutingModule,
    HttpClientModule,
    environment.production ?
    [] : HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [
    EcommerceService
  ]
})
export class EcommerceGridModule { }
