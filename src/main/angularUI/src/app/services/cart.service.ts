import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';
import { Drink } from '../models/Drink';
import { CartItem } from '../models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();
  addToCart(drink:Drink):void{
    let cartItem =this.cart.items.find(item => item.drink.id === drink.id);
    if(cartItem){
      this.changeQuantity(drink.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(drink));
  }

  removeFromCart(drinkId:number):void{
    this.cart.items=
    this.cart.items.filter(item => item.drink.id != drinkId);
  }
  
  changeQuantity(drinkId:number, quantity:number){
    let cartItem = this.cart.items.find(item => item.drink.id === drinkId);
    if(!cartItem) return;
    cartItem.quantity =quantity;
  }

  getCart(): Cart{
    return this.cart;
  }
  
}
