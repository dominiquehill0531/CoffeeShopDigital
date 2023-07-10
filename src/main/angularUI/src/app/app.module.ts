import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RatingModule } from 'ng-starrating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { CreateCoffeeComponent } from './create-coffee/create-coffee.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { OrderCompleteComponent } from './order-complete/order-complete.component';
import { HeaderComponent } from './page-standards/header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartPageComponent } from './cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminEditPageComponent,
    UserLoginPageComponent,
    CreateCoffeeComponent,
    MainMenuComponent,
    RegisterUserComponent,
    CheckoutPageComponent,
    OrderCompleteComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    CartPageComponent,


  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    RatingModule,

  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
