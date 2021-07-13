import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { Customer } from './interface/customer.interface';
import { Product } from './interface/product.interface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  productsConfirmed: Product[] = [];
  
  dataCustomer : Customer;

  canRoute = false

  customerDataChange: Subject<boolean> = new Subject<boolean>()

  customerDataSend = false;

  constructor() { 
    this.customerDataChange.subscribe((value)=>{
      this.customerDataSend = value;
    })
  }

  changeCustomerData(check: boolean) {
    this.customerDataChange.next(check)
  }

  isAuthenticated(route: ActivatedRouteSnapshot) {
    this.canRoute = false;
    console.log(route.routeConfig.path)
    switch (route.routeConfig.path) {
      case 'checkout':
        if (this.productsConfirmed.length) {
          this.canRoute = true;
        }
        break;    
      case 'complete':
        if (this.customerDataSend) {
          this.canRoute = true;
        }
        break;
      case 'carrello':
          this.canRoute = true;
        break;
    }
    return this.canRoute;
  }
}
