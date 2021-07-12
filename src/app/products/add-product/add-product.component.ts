import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  name: string;
  brand: string;
  img: string[];
  id: number;
  type: string;
  description: string;
  quantity: number;
  price: number;
  onSales: boolean;
  discount: number;

  editMode = false;

  constructor() { }

  ngOnInit(): void {
  }

  submitProduct(){

  }

}
