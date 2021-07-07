import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from './interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = 'https://3n1dqzwmnn.api.quickmocker.com/';

  cart: Product[] = []

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<any>(this.url)
  }
}
