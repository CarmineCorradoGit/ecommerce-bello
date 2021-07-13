import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { Product } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  name: string = "";
  brand: string = "";
  imgUrl: string = "";
  img: string[] = [];
  id: number = 0;
  type: string = "";
  description: string = "";
  quantity: number = 0;
  price: number = 0;
  onSales: boolean;
  discount: number = 0;
  isEnabled: boolean;

  counterId: number = 0;
  imgDefault = "https://montagnolirino.it/wp-content/uploads/2015/12/immagine-non-disponibile.png";
  @ViewChild("errorStamp") error: ElementRef;
  httpClient: any;
  constructor(private appService: AppService, private route: ActivatedRoute, private router: Router) {
    this.appService.getProducts().subscribe((res) => {
      this.counterId = res.length;
    })
  }

  ngOnInit(): void {
  }

  changeDisabled(event) {
    const value = event.target.value;
    if (value === 'si') {
      this.isEnabled = false;
    } else {
      this.isEnabled = true;
    }
  }
  controlUrlImg(link: string) {
    console.log("holaaa0");
    if (link.startsWith("https://")) {
      return true;
    } else {
      console.log("holaaa1");
      return false;
    }
  }

  addImages() {
    if (!this.controlUrlImg(this.imgUrl)) {
      console.log("holaaa2");
      this.error.nativeElement.style = "height:4%";
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Inserisci bene il link";
    } else {
      if (this.img.length<1) {
        this.img.unshift(this.imgDefault);
      }
      this.img.push(this.imgUrl);
      console.log(this.img);
      this.imgUrl = "";
      this.error.nativeElement.style = "background : green ;height:4%";
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Prima immagine inserita con successo";
    }
  }
  deletImmage(i: number) {
    this.img.splice(i, 1);
  }

  addProduct() {
    console.log(this.imgUrl);

    if (this.name === "") {
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Campo nome prodotto obbligatorio";
    } else if (this.brand === "") {
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Campo marca prodotto obbligatorio";
    } else if (this.type === "") {
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Campo categoria obbligatorio, selezionare la categoria giusta";
      this.error.nativeElement.style = "height:7%";
    } else if (this.quantity === 0) {
      this.error.nativeElement.style = "height:4%";
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Campo quantità prodotto obbligatorio";
    } else if (this.price === 0) {
      console.log(this.price);
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Campo prezzo prodotto obbligatorio";
    } else if (this.isEnabled === false && this.discount === 0) {
      console.log(this.isEnabled);
      this.error.nativeElement.style = "height:7%";
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Campo percentuale offerta obbligatorio, altrimenti seleziona che non è in offerta!!";
    } else if (this.description === "") {
      this.error.nativeElement.style = "height:4%";
      this.error.nativeElement.classList.add("error");
      this.error.nativeElement.innerHTML = "Campo Descrizione prodotto obbligatorio";
    } else {
      this.counterId++;
      let obj: Product;
      if (this.img.length === 0) {
        this.img.push(this.imgDefault);
      }
      obj = {
        name: this.name,
        brand: this.brand,
        img: this.img,
        id: this.counterId,
        type: this.type,
        description: this.description,
        quantity: this.quantity,
        price: this.price,
        onSales: !this.isEnabled,
        discount: this.discount
      }
      try {
        this.appService.addProduct(obj).subscribe((res) => {
          this.error.nativeElement.classList.add("error");
          this.error.nativeElement.innerHTML = "Grazie per aver aggiunto il prodotto!!!";
          this.error.nativeElement.style = "background : green; height:4%";
        });
        this.name = "";
        this.brand = "";
        this.img = [];
        this.imgUrl = "";
        this.type = "";
        this.description = "";
        this.quantity = 0;
        this.price = 0;
        this.onSales = false,
          this.discount = 0;

        setTimeout(() => {
          this.router.navigate(['../negozio'], { relativeTo: this.route });
        }, 8000);
      } catch (error) {
        this.error.nativeElement.classList.add("error");
        this.error.nativeElement.innerHTML = "Errore tecnico!!! Si prega di riprovare più tardi.<br> Grazie" + this.name;
        this.error.nativeElement.style = "height:9%";
        console.log(error);
      }
    }
  }

}
