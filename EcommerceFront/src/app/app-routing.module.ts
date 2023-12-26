import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './Components/cart/cart.component';
import { HomeComponent } from './Components/home/home.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { ProductsComponent } from './Components/products/products.component';
import { TestComponent } from './test/test.component';
import { WishListComponent } from './Components/wish-list/wish-list.component';
import { RegisterComponent } from './Components/register/register.component';
import { PaymentComponent } from './Components/payment/payment.component';

const routes: Routes = [
  {path:'', redirectTo: 'home', pathMatch:'full'},
  {path:"home", component:HomeComponent},
  {path:"nav-bar",component:NavbarComponent},
  {path:"products/:cat",component:ProductsComponent},
  {path:"product/:prod-name",component:ProductDetailsComponent},
  {path:"test", component:TestComponent},
  {path:"cart", component:CartComponent},
  {path:"whish-list", component:WishListComponent},
  {path:"register",component:RegisterComponent},
  {path:"payment",component:PaymentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
