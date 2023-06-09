import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.services';
import { FlavorComponent } from '../flavor/flavor.component';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cartItems: FlavorComponent[] = [];
  showCartItems: boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  toggleCartItems() {
    this.showCartItems = !this.showCartItems;
  }

  removeFromCart(item: FlavorComponent) {
    this.cartService.removeFromCart(item);
    this.cartItems = this.cartService.getCartItems();
  }
}
