import { DrinkTypes } from "./drink-types";
import { MilkTypes } from "./milk-types";
import { Purchasable } from "./purchasable";
import { SizeTypes } from "./size-types";
import { SweetTypes } from "./sweet-types";

export class Drink extends Purchasable {

    //Completely programmatic
    private static nextId: number = 1;
    private id!: number;
    
    //Properties affected by ordering customers
    public size?: SizeTypes;
    public milkChoice?: MilkTypes;
    public flavors?: SweetTypes[] = [];
    public isDrinkIced?: boolean;
    public isDecaf?: boolean;
    public hasSplashMilk?: boolean;   
    options: any[] = [];
    
    //Properties affected by customers saving drinks to profile
    tags?: string[];
    category?: string;


    constructor(drinkName: DrinkTypes, drinkPrice: number, drinkImage?: string) {
        super(drinkName, drinkPrice, drinkImage);
        this.id = Drink.nextId;
        Drink.nextId++
    }
}