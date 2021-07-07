import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  private url = "https://3n1dqzwmnn.api.quickmocker.com"

  products: Product[] = []

  constructor(private http: HttpClient) {
    this.http.get<any>(this.url).toPromise().then(data => {
      console.log(data);

      this.products = data.products;
      console.log(this.products);


    })
  }

  ngOnInit(): void {
  }

}
