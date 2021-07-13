import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  products: Product[] = [];
  brands: string[] = [];
  types: string[] = [];
  selectedType: any = 'Any';
  selectedBrand: any = 'Any';

  constructor(private appService: AppService) {
    let prodotti = this.appService.getProducts();
    prodotti.subscribe(data => {
      this.products = data;
      data.forEach(element => {
        if(!(this.brands.includes(element.brand))){
          this.brands.push(element.brand)
        }
        if(!(this.types.includes(element.type))){
          this.types.push(element.type)
        }
      });
    })
  }
 
  addCartElement(e: number){
    let element = this.products.find(element => element.id === e)
    this.appService.cart.push(element);
  }

  ngOnInit(): void {
  }
}
