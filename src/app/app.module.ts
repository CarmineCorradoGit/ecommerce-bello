import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { ShopComponent } from './shop/shop.component';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CardComponent } from './shop/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChisiamoComponent,
    ShopComponent,
    CartComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
