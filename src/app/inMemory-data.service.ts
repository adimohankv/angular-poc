import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Product } from './data/ecommerce.data';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const products = Product;
    return {products};
  }
}
