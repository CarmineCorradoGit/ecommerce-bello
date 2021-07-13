import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {


  name:string;
  surname:string;
  email:string;
  address:string;
  country:string;
  city:string;
  cap:number;
  paymentMethod:string;
  
  constructor() {
   }


   consoleLog(){
    console.log(this.country)
  }

  ngOnInit(): void {
  }

}
