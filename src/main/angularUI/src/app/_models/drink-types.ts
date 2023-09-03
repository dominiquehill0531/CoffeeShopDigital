import { Purchasable } from "./purchasable";

export class DrinkTypes extends Purchasable {
    
    static nextId: number = 11;
    id: number;
    static drinkTypesList: DrinkTypes[] = [
        new DrinkTypes('Latte', 4.50, '/assets/images/Latte.jpg'),
        new DrinkTypes('Cafe Au Lait', 3.75),
        new DrinkTypes('Cappuccino', 4.00, '/assets/images/Cappuccino.jpg'),
        new DrinkTypes('Cortado', 3.50),
        new DrinkTypes('Drip', 3.25),
        new DrinkTypes('Espresso', 2.75),
        new DrinkTypes('Espresso Tonic', 4.25),
        new DrinkTypes('Pourover', 4.00),
        new DrinkTypes('Tea', 3.00),
        new DrinkTypes('Tea Fog', 3.50)
    ];

    
    
    
    constructor(aName: any, aPrice: number, anImage?: string) {
        super(aName, aPrice, anImage);
        this.id = DrinkTypes.nextId;
        DrinkTypes.nextId++;
    }
}
