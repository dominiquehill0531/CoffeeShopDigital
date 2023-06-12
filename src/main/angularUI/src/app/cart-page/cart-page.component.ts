import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models/CartItem';
import { DrinkService } from '../services/drink.service';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!:Cart;
  constructor(private cartService: CartService, private drinkkSerive:DrinkService) { 
    let drinks = drinkkSerive.getAll();
    cartService.addToCart(drinks[1])
    cartService.addToCart(drinks[2])
    cartService.addToCart(drinks[3])
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.drink.id);
    this.setCart();
  }

  changeQuantity(cartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.drink.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}