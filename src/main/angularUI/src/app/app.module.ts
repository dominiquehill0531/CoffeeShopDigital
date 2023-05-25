import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AdminEditPageComponent } from './admin-edit-page/admin-edit-page.component';
import { UserLoginPageComponent } from './user-login-page/user-login-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateCoffeeComponent } from './create-coffee/create-coffee.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
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
import { UserHomepageComponent } from './pages/user-homepage/user-homepage.component';
import { OrderItemSpecificsComponent } from './pages/order-item-specifics/order-item-specifics.component';
import { HomePageComponent } from './home-page/home-page.component';
const routes: Routes = [
  { path: 'user-homepage', component: UserHomepageComponent },
  { path: 'order-item-specifics', component:OrderItemSpecificsComponent },
  { path: 'home-page', component: HomePageComponent}
]

@NgModule({
  declarations: [
    AppComponent,

    AdminEditPageComponent,
    UserLoginPageComponent,
    CreateCoffeeComponent,

    UserHomepageComponent,
    OrderItemSpecificsComponent,
    HomePageComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
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

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
