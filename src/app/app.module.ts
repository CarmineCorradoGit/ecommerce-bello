import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './orders/cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './shop/card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { SalesComponent } from './sales/sales.component';
import { ItemComponent } from './item/item.component';
import { FaqComponent } from './faq/faq.component';
import { OrdersComponent } from './orders/orders.component';
import { InfoComponent } from './orders/info/info.component';
import { CompleteComponent } from './orders/complete/complete.component';
import { SlideComponent } from './home/carouselSlide/slide.component';

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
    InfoComponent,
    CompleteComponent,
    SlideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
