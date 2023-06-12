import { Injectable } from '@angular/core';
import { Drink } from '../models/Drink';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {
  static getDrinkById(arg0: any): Drink {
    throw new Error('Method not implemented.');
  }

  constructor() { }

  getDrinkById(id: number):Drink{
    return this.getAll().find(drink => drink.id == id)!;
  }

  getAllDrinkByTag(tag: string): Drink[] {

    //statement?doJob1:doJob2
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter(drink => drink.tags?.includes(tag));
  }

  getAllTags(): Tag[]{
    return [
      {name: 'All', count: 9},
      {name: 'Coffee', count: 3},
      {name: 'Tea', count:3},
      {name: 'Pastry', count: 3},
    ]
  }

  getAll():Drink[]{
    return [
      {
        id:1,
        name:"Latte",
        price:3.5,
        category:'drink',
        favorite:true,
        stars:4.5,
        imageUrl:"/assets/images/Latte.jpg",
        tags:['Coffee'],
    },
      {
        id:2,
        name:"Cappuccino",
        price:3,
        category:'drink',
        favorite:false,
        stars:4.8,
        imageUrl:"/assets/images/Cappuccino.jpg",
        tags:['Coffee'],
    },
      {
        id:3,
        name:"Mocha",
        price:3.5,
        category:'drink',
        favorite:true,
        stars:5,
        imageUrl:"/assets/images/mocha.jpg",
        tags:['Coffee'],
    },
      {
        id:4,
        name:"Chai-tea",
        price:4,
        category:'drink',
        favorite:true,
        stars:4.6,
        imageUrl:"/assets/images/Chai-tea.jpg",
        tags:['Tea'],
    },
      {
        id:5,
        name:"Cinnamon-green-tea",
        price:2.5,
        category:'drink',
        favorite:true,
        stars:4.9,
        imageUrl:"/assets/images/cinnamon-green-tea.jpg",
        tags:['Tea'],
    },
      {
        id:6,
        name:"Ice-tea",
        price:2.5,
        category:'drink',
        favorite:true,
        stars:4.2,
        imageUrl:"/assets/images/ice-tea.jpg",
        tags:['Tea'],
    },
      {
        id:7,
        name:"Miso-caramel-apple-danish",
        price:5,
        category:'food',
        favorite:false,
        stars:4.8,
        imageUrl:"/assets/images/miso-caramel-apple-danish.jpg",
        tags:['Pastry'],
    },
      {
        id:8,
        name:"Strawberry-shortcake-puffs",
        price:4.5,
        category:'food',
        favorite:true,
        stars:4.3,
        imageUrl:"/assets/images/strawberry-shortcake-puffs.jpg",
        tags:['Pastry'],
    },
      {
        id:9,
        name:"White-chocolate-mousse",
        price:3,
        category:'drink',
        favorite:true,
        stars:4.7,
        imageUrl:"/assets/images/white-chocolate-mousse.jpg",
        tags:['Pastry'],
    },
  ]
  }
}
