import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  private url = "https://run.mocky.io/v3/06095b9f-3381-4b17-9703-4a54cc265f19"

  products: Product[] = []

  constructor(private http: HttpClient) {
      this.http.get<any>(this.url, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }).subscribe(data => {
        console.log(data)
      });
   }

  ngOnInit(): void {
  }

}
