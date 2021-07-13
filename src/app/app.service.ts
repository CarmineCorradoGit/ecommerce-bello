import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
<<<<<<< HEAD
import {  Subject } from 'rxjs';
import { Message } from './interface/message.interface';
=======
import { Subject } from 'rxjs';
>>>>>>> 2472c3b630de12033a3e16d3ae682f9f0dd71aed
import { Product } from './interface/product.interface';
import { User } from './interface/user.interface';

// da splittare su più service sta crescendo troppo

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private url: string = 'https://60e7113c15387c00173e4a54.mockapi.io/';

  userRole: 'user'|'admin' | null = null;

  userRoleChange: Subject<'user'|'admin' | null> = new Subject<'user'|'admin'|null>()

  cart: Product[] = []

  canRoute: boolean;

  //auth

  constructor(private http: HttpClient) { 
    this.userRoleChange.subscribe((value)=>{
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

// end auth

// products

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

  //end products

  getMessages() {
    return this.http.get<Message[]>(this.url+'messages');
  }

  postMessage(message: Message){
    return this.http.post<Message>(this.url+ 'messages/', message);
  }
}
