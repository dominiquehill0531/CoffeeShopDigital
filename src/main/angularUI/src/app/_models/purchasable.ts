import { DrinkTypes } from "./drink-types";

export abstract class Purchasable {
    name: any;
    description!: string;
    price!: number;
    quantity: number = 1;
    favorite: boolean = false;
    stars: number = 0;
    imageUrl?: string;


    constructor(aName: any, aDescription: string, aPrice: number) {
        this.name = aName;
        this.description = aDescription;
        this.price = aPrice;
    }


    printOrderString() {
        return `${this.quantity}\t${this.name}\t=\t$ ${this.quantity * this.price}`;
    }

    setQuantity(newQty: number) {
        this.quantity = newQty;
    }
}
