import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './orders/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './generics/card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SalesComponent } from './sales/sales.component';
import { ItemComponent } from './item/item.component';
import { FaqComponent } from './faq/faq.component';
import { OrdersComponent } from './orders/orders.component';
import { CheckoutComponent } from './orders/checkout/checkout.component';
import { CompleteComponent } from './orders/complete/complete.component';
import { SlideComponent } from './generics/carouselSlide/slide.component';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from './generics/alert/alert.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChisiamoComponent,
    ShopComponent,
    CartComponent,
    CardComponent,
    NavbarComponent,
    FooterComponent,
    SalesComponent,
    ItemComponent,
    FaqComponent,
    OrdersComponent,
    CheckoutComponent,
    CompleteComponent,
    SlideComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
