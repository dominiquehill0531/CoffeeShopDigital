import { Drink } from "./Drink";

export class CartItem{
    constructor(drink: Drink){
        this.drink = drink;
    }
    drink:Drink;
    quantity:number = 1;

    get price():number{
        return this.drink.price * this.quantity;
    }
}