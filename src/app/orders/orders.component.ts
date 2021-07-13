import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  toShow = "nav-cart"

  constructor() { }

  ngOnInit(): void {
  }

  changeView(view: string){
    let elemt =[
      'nav-cart',
      'nav-checkout',
      'nav-complete'
    ]
    switch(view){
      case 'next':
        if(this.toShow !== 'nav-complete'){
          let i = elemt.indexOf(this.toShow);
          this.toShow = elemt[i+1];
        }
        break; 
      case 'back':
        if(this.toShow !== 'nav-cart'){
          let i = elemt.indexOf(this.toShow);
          this.toShow = elemt[i-1];
        }
        break; 
      case 'nav-cart':
        this.toShow = 'nav-cart'
        break; 
      case 'nav-checkout':
        this.toShow = 'nav-checkout'
        break; 
      case 'nav-complete':
        this.toShow = 'nav-complete'
        break;
    }
    if(view === 'next'){

    } else{

    }
  }

}