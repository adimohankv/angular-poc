import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class EcommerceService {
  mockUrl = 'api/products';

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<[]>(this.mockUrl);
  }
}
