import { Injectable } from '@angular/core';
import { Customer } from './interface/customer.interface';
import { Product } from './interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  productsConfirmed: Product[] = [];
  
  dataCustomer : Customer;

  constructor() { }
}
