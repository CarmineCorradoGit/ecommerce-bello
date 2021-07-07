import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './orders/cart/cart.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { SalesComponent } from './sales/sales.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';

const routes: Routes = [
  { path: 'offerte', component: SalesComponent },
  { path: 'negozio', component: ShopComponent },
  { path: 'chi-siamo', component: ChisiamoComponent },
  { path: 'carrello', component: OrdersComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'prodotto/:id', component: ItemComponent },
  { path: '', component: HomeComponent , pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }