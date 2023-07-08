import { Injectable } from '@angular/core';
import { Drink } from '../models/Drink';
import { Tag } from '../models/Tag';
import { DrinkTypes } from '../models/drink-types';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  static getDrinkById(arg0: any): Drink {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getDrinkById(id: number): DrinkTypes {
    return this.getAll().find(drink => drink.id == id)!;
  }

  getDrinkByName(name: string): DrinkTypes {
    return DrinkTypes.drinkTypesList.find(drink => drink.name == name)!;
  }

  getAll(): DrinkTypes[] {
    return DrinkTypes.drinkTypesList;
  }
}
