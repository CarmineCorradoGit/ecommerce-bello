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

  constructor(private http: HttpClient) { }

  isAuthenticated(route: ActivatedRouteSnapshot){
    console.log(route)
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
