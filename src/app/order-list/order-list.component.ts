import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orders: Orders[] = []

  constructor(private orderService: OrderService) {
    this.orderService.getOrders().subscribe((res)=>{
      this.orders = res;
    })
   }

  ngOnInit(): void {
  }

}
