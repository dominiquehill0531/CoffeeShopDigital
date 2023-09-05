import { Injectable } from '@angular/core';
import { Cart } from '../_models/Cart';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(purchase: any): void {
    let cartItem = this.cart.items.find(item => item.id === purchase.id);
    if (cartItem) {
      this.changeQuantity(purchase.id, cartItem.quantity + 1);
    } else {
      this.cart.items.push(purchase);
    }
    
  }

  removeFromCart(purchaseId: number): void {
    this.cart.items=
    this.cart.items.filter(item => item.id != purchaseId);
  }
  
  changeQuantity(purchaseId:number, quantity:number): void {
    let cartItem = this.cart.items.find(item => item.id === purchaseId);
    if (cartItem) {
      cartItem.quantity = quantity;
    }
  }

  getCart(): Cart{
    return this.cart;
  }
  
}
