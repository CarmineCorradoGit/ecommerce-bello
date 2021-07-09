import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './orders/cart/cart.component';
import { ChisiamoComponent } from './chisiamo/chisiamo.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './products/item/item.component';
import { SalesComponent } from './sales/sales.component';
import { ShopComponent } from './shop/shop.component';
import { OrdersComponent } from './orders/orders.component';
import { CompleteComponent } from './orders/complete/complete.component'
import { CheckoutComponent } from './orders/checkout/checkout.component';
import { LoginComponent } from './users/login/login.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductsComponent } from './products/list-products/list-products.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'offerte', component: SalesComponent },
  { path: 'negozio', component: ShopComponent },
  { path: 'chi-siamo', component: ChisiamoComponent },
  { path: 'carrello', component: OrdersComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'prodotto/:id', component: ItemComponent },
  { path: 'complete', component: CompleteComponent},
  { path: 'login', component: LoginComponent},
  { path: 'sign-up', component: SignUpComponent},
  { path: 'add-prodotto', component: AddProductComponent},
  { path: 'edit-prodotto/:id', component: AddProductComponent},
  { path: 'list-prodotti', component: ListProductsComponent},
  { path: '', component: HomeComponent , pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }