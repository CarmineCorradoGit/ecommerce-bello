import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { Subject } from 'rxjs';
import { Product } from './interface/product.interface';
import { User } from './interface/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = 'https://60e7113c15387c00173e4a54.mockapi.io/';

  userRole: 'user' | 'admin' | null = null;

  userRoleChange: Subject<'user' | 'admin' | null> = new Subject<'user' | 'admin' | null>()

  cart: Product[] = []

  canRoute: boolean;

  constructor(private http: HttpClient) {
    this.userRoleChange.subscribe((value) => {
      this.userRole = value;
    })
  }

  changeUserRole(user: 'user' | 'admin' | null) {
    this.userRoleChange.next(user)
  }

  isAuthenticated(route: ActivatedRouteSnapshot) {
    this.canRoute = false;
    switch (route.routeConfig.path) {
      case 'list-prodotti':
        if (this.userRole === 'admin') {
          this.canRoute = true;
        }
        break;
      case 'edit-prodotto/:id':
        if (this.userRole === 'admin') {
          this.canRoute = true;
        }
        break;
      case 'add-prodotto':
        if (this.userRole === 'admin') {
          this.canRoute = true;
        }
        break;
      case 'sign-up':
        if (this.userRole === null) {
          this.canRoute = true;
        }
        break;
      case 'login':
        if (this.userRole === null) {
          this.canRoute = true;
        }
        break;
      case 'complete':
        if (this.userRole !== null) {
          this.canRoute = true;
        }
        break;
      case 'checkout':
        if (this.userRole !== null) {
          this.canRoute = true;
        }
        break;
    }
    return this.canRoute;
  }

  getUser(id: number) {
    return this.http.get<User>(this.url + 'users');
  }

  getUsers() {
    return this.http.get<User[]>(this.url + 'users');
  }

  postUser(user: User) {
    return this.http.post<User[]>(this.url + 'users', user);
  }

  getProducts() {
    return this.http.get<Product[]>(this.url + 'products');
  }

  getProduct(id: number) {
    return this.http.get<Product>(this.url + 'products/' + id);
  }

  postProduct(product: Product) {
    return this.http.post<Product>(this.url + 'products/', product);
  }

  deleteProduct(id: number) {
    return this.http.delete<Product>(this.url + 'products/' + id);
  }

  addProduct(product: Product) {
    return this.http.post<Product>(this.url + 'products/', product);
  }
}
