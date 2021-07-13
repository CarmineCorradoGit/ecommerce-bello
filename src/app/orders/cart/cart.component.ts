import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {



  tmpArr: any[] = [
    {
      id: 1,
      img: [
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ],
      brand: "Apple",
      name: "MacBook Pro",
      description: 'Bellissimo Pc Portatile 345 TB ram',
      quantity: 3,
      price: 2000.00,
      onSales: true
    },
    {
      id: 2,
      img: [
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ],
      brand: "HP",
      name: "Pavillon dv6",
      description: 'Ottimo Pc Portatile 45 TB ram',
      quantity: 7,
      price: 600.00,
      onSales: true
    },
    {
      id: 3,
      img: [
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "https://images.pexels.com/photos/2148217/pexels-photo-2148217.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      ],
      brand: "Asus",
      name: "Aspire 8",
      description: 'Magnifico Pc Portatile 12 TB ram',
      quantity: 5,
      price: 450.00,
      onSales: false
    }
  ]

  constructor(private appService: AppService) {
    this.tmpArr = this.appService.cart;
  }

  ngOnInit(): void {
  }

  getTotalPrice = (): number => {
    let price: number = 0;
    const priceProducts: any[] = this.tmpArr.map(product => product.price * product.quantity);
    priceProducts.forEach(pricePd => price += pricePd);
    console.log(price);
    return price
  }

  addProduct = (index: number): number => this.tmpArr[index].quantity++;

  decProduct = (index: number): number => this.tmpArr[index].quantity--;





}
