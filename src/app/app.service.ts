import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = 'https://60c8ea647dafc90017ffbcea.mockapi.io/products';

  cart: Product[] = []

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.url);
  }
  
  getProduct(id: number) {
    return this.http.get<any>(this.url+ '/' +id);
  }
}
