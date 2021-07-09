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
  img: any = ['https://montagnolirino.it/wp-content/uploads/2015/12/immagine-non-disponibile.png', 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTUyR_ZYPZ0knI5HE_dDeIuW2-rJTKxrozu9x5rVt01UF-osKT7R2qjJeH7uhTNt6lZK3qmHa50ITk&usqp=CAc', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQbRFhzCdMZ_LcjYwFD8FVdqj-TLgeOu8pxOEuHd2ztModxJnTHPFb2iw_-KLqFSJxpFza7sxOUNQ&usqp=CAc', 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRfBIb372lAjZgaYg2u3Ij6xQQP6zVzkvxWzsXion1libXrMGqi1nl_9oiNYOvMjvJlbyWaStU9hmA&usqp=CAc'];
  product: Product;
  imgShow: string;
  onClick: boolean = false;

  constructor(private appService: AppService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.appService.getProduct(this.id).subscribe((res) => {
        this.product = res;
        this.product.img = this.img;
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
