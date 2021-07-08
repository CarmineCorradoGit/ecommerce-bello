import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  products: Product[];

  constructor(private appService: AppService) {
    let prodotti = this.appService.getProducts();
    prodotti.subscribe(data => {
      this.products = data.filter((element) => element.onSales === true)
    })
  }

  ngOnInit(): void {
  }

}
