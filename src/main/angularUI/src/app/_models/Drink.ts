import { DrinkTypes } from "./drink-types";
import { MilkTypes } from "./milk-types";
import { Purchasable } from "./purchasable";
import { SizeTypes } from "./size-types";
import { SweetTypes } from "./sweet-types";

export class Drink extends Purchasable {
    static nextId: number = 1;
    id: number;
    size!: SizeTypes;
    isDrinkIced: boolean = false;
    isDecaf: boolean = false;
    hasSplashMilk: boolean = false;
    milkChoice?: MilkTypes;
    flavors?: SweetTypes[];
    options?: [];
    tags?: string[];
    category?: string;


    constructor(drinkName: DrinkTypes, drinkDescription: string, drinkPrice: number,
                drinkSize: SizeTypes) {
        super(drinkName, drinkPrice);
        this.id = Drink.nextId;
        this.size = drinkSize;
        Drink.nextId++
    }
}