import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DrinkTypes } from '../models/drink-types';
import { MenuService } from '../services/menu.service';
// import {}
interface Item {
  price: number,
  name: string,
  imageUrl: string,
}
@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})

export class UserHomepageComponent implements OnInit {
  ItemsForSale: Item[] = [
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Capachino', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Tea', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Bubble Tea', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Expresso', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Flower Tea', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
  ]

  drinkTypes!: DrinkTypes[];

  constructor(private router: Router,private menuService: MenuService) {
  }

  ngOnInit(): void {
    this.menuService.getDrinkTypes().subscribe((data: DrinkTypes[]) => {
      console.log(data);
      this.drinkTypes = data;
    })
  }

  // gotoOrderItem() {
  //   this.router.navigate(['/create-coffee']);
  // }
  
  goToLoginPage() {
    this.router.navigate(['/user-login']);
  }
    getLowestPrice(): number {
      let lowestPrice = Infinity;
      for (const drink of this.drinkTypes) {
        if (drink.price < lowestPrice) {
          lowestPrice = drink.price;
        }
      }
      return lowestPrice;
    }
}
