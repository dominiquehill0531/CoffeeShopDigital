import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../_services/cart.service';
import { DrinkService } from '../_services/drink.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: Cart;

  constructor(private cartService: CartService, private drinkService: DrinkService) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  removeFromCart(cartItem: any){
    this.cartService.removeFromCart(cartItem);
    this.setCart();
  }

  changeQuantity(cartItem: any, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.drink.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}
