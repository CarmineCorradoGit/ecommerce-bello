import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Product } from './interface/product.interface';
import { User } from './interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = 'https://60e7113c15387c00173e4a54.mockapi.io/';

  userRole: 'user'|'admin' | null = 'admin';

  cart: Product[] = []

  canRoute: boolean;

  constructor(private http: HttpClient) { }

  isAuthenticated(route: ActivatedRouteSnapshot){
    this.canRoute = false;
    switch (route.routeConfig.path){
      case 'list-prodotti':
        if(this.userRole === 'admin'){
          this.canRoute = true;
        }
        break;
      case 'edit-prodotto/:id':
        if(this.userRole === 'admin'){
          this.canRoute = true;
        }
        break;
      case 'add-prodotto':
        if(this.userRole === 'admin'){
          this.canRoute = true;
        }
        break;
      case 'sign-up':
        if(this.userRole === null){
          this.canRoute = true;
        }
        break;
      case 'complete':
        if(this.userRole !== null){
          this.canRoute = true;
        }
        break;
      case 'checkout':
        if(this.userRole !== null){
          this.canRoute = true;
        }
        break;

    }
    if(this.userRole){
      return true
    } else {
      return false
    }
  }

  getUser(id: number) {
    return this.http.get<User>(this.url+'users');
  } 

  getUsers() {
    return this.http.get<User[]>(this.url+'users');
  }  
  
  postUser(user: User) {
    return this.http.post<User[]>(this.url+'users', user);
  } 

  getProducts() {
    return this.http.get<Product[]>(this.url+'products');
  }
  
  getProduct(id: number) {
    return this.http.get<Product>(this.url+ 'products/' +id);
  }  

  deleteProduct(id: number) {
    return this.http.delete<Product>(this.url+ 'products/' +id);
  }
}
