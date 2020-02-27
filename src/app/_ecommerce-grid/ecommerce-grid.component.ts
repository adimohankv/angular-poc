import { Component, OnInit } from '@angular/core';

import { EcommerceService } from '../services/ecommerce.service';

@Component({
  selector: 'app-ecommerce-grid',
  templateUrl: './ecommerce-grid.component.html',
  styleUrls: ['./ecommerce-grid.component.scss']
})
export class EcommerceGridComponent implements OnInit {
  productsList = [];
  sortAttr = 'priceLTH';
  activeStyle = 'grid';

  constructor(private ecommerceService: EcommerceService) { }

  ngOnInit(): void {
    this.ecommerceService.getAll().subscribe(products => {
      products.splice(70);
      this.productsList = products;
    });
  }

}
