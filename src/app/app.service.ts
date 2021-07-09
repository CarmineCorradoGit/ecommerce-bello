import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = 'https://60e7113c15387c00173e4a54.mockapi.io/';

  cart: Product[] = []

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get<any>(this.url+'products');
  }
  
  getProduct(id: number) {
    return this.http.get<any>(this.url+ 'products/' +id);
  }
}
