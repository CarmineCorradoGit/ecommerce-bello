import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = []

  constructor(private appService: AppService) {
    let prodotti = this.appService.getProducts();
    prodotti.subscribe(data => {
      this.products = data;
      console.log(this.products);
    })




  }

  ngOnInit(): void {
  }

}
