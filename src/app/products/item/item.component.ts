import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppService } from '../../app.service';
import { Product } from '../../interface/product.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  id: number;
  img: any = [];
  product: Product;
  imgShow: string;
  onClick: boolean = false;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.appService.getProduct(this.id).subscribe((res) => {
        this.product = res;
        
        if (this.product.img.length > 1) {
          this.imgShow = this.product.img[1];
        }
      })
    });
  }

  changeImg(img: string) {
    this.imgShow = img;
  }
  like(event) {
    if (!this.onClick) {
      event.target.classList.add('checked-heart');
      this.onClick = true;
    } else {
      event.target.classList.remove('checked-heart');
      this.onClick = false;
    }
  }

}
