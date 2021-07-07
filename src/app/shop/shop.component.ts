import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  private url = "https://run.mocky.io/v3/6e082e65-4097-4bfd-abe0-aa8a3ae4ed09/products"

  products: Product[] = []

  constructor(private http: HttpClient) {
    this.http.get<any>(this.url).subscribe(data => {
      this.products = data.products;
    })
  }

  ngOnInit(): void {
  }

}
