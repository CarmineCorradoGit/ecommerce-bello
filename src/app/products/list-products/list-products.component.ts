import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products: Product[] = [];

  constructor(private appService: AppService) {
    this.appService.getProducts().subscribe(data => {
      this.products = data;
    })
   }

  ngOnInit(): void {
  }

  deleteProduct(id: number){
    this.appService.deleteProduct(id).subscribe((res)=>{
      console.log(res);
    })
  }

}
