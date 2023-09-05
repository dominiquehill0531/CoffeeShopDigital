export abstract class Purchasable {
    name!: any;
    price!: number;
    quantity!: number;
    description?: string = "";
    favorite?: boolean = false;
    stars?: number = 0;
    imageUrl?: string;


    constructor(aName: any, aPrice: number, anImage?: string) {
        this.name = aName;
        this.price = aPrice;
        this.imageUrl = anImage;
    }


    printOrderString(): string {
        return `${this.quantity}\t${this.name}\t=\t$ ${this.quantity * this.price}`;
    }

    setQuantity(newQty: number) {
        this.quantity = newQty;
    }

    getName(): any { return this.name; }
    getImage(): any { return this.imageUrl; }
}
