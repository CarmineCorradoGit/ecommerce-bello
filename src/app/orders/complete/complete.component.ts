import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-complete',
  templateUrl: './complete.component.html',
  styleUrls: ['./complete.component.scss']
})
export class CompleteComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }
cart = [
  {
    name: "smartphone X99" ,
    brand: "Samsung",
    img: "link img",
    id: 1,
    type: "categoria x",
    description: "bella descrizione",
    quantity: 3,
    price: 250,
    onSales: false,
},
{
  name: "smartphone 55S" ,
  brand: "Huawei",
  img: "link img",
  id: 1,
  type: "categoria y",
  description: "bella descrizione bis",
  quantity: 2,
  price: 500,
  onSales: false,
}
]

}

