import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { CreateCoffeeComponent } from './create-coffee/create-coffee.component';
import { UserHomepageComponent } from './user-homepage/user-homepage.component';
import { OrderItemSpecificsComponent } from './order-item-specifics/order-item-specifics.component';

import { HomePageComponent } from './home-page/home-page.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { HomeComponent } from './home/home.component';
import { UserHeaderComponent } from './user-header/user-header.component';
import { DrinkpageComponent } from './drinkpage/drinkpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
//import { UserHomepageComponent } from './user-homepage/user-homepage.component';

const routes: Routes = [
  { path: 'admin-edit', component: AdminEditPageComponent },
  { path: 'user-login', component: UserLoginPageComponent },
  { path: 'create-coffee/:drinkId', component: CreateCoffeeComponent },
  { path: 'user-homepage', component: UserHomepageComponent },
  { path: 'order-item-specifics', component: OrderItemSpecificsComponent },
  { path: 'home-page', component: HomePageComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'checkout', component: CheckoutPageComponent},
  { path: 'order-complete', component: OrderCompleteComponent},
  { path: 'search/:searchTerm', component: HomeComponent},
  { path: 'tag/:tag', component:HomeComponent},
  
  

  { path: 'home', component: UserHeaderComponent, children: [
    {
      path: '', component: HomeComponent
    },
    { 
      path: 'drink/:id', component:DrinkpageComponent
   }, { path: 'cart-page', component: CartPageComponent},
   
  ]},
  



  { path: '**', component: HomePageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
