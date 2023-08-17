import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { CreateCoffeeComponent } from './create-coffee/create-coffee.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { HomeComponent } from './home/home.component';
import { CartPageComponent } from './cart-page/cart-page.component';

const routes: Routes = [
  { path: 'admin-edit', component: AdminEditPageComponent },
  { path: 'user-login', component: UserLoginPageComponent },
  { path: 'create-coffee/:drinkName', component: CreateCoffeeComponent },
  { path: 'main-menu', component: MainMenuComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'checkout', component: CheckoutPageComponent },
  { path: 'order-complete', component: OrderCompleteComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component:HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: '**', component: MainMenuComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
