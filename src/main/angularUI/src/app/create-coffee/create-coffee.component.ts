import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css']
})
export class CreateCoffeeComponent implements OnInit {
  milks = ["Heavy Cream", "Vanilla Sweet Cream", "Non Fat Milk", "2% Milk", "Whole Milk", "Half & Half", "Almond", "Coconut", "Oatmilk", "Soy"];

  flavors = ["Brown Sugar Syrup", "Caramel Syrup", "Hazelnut Syrup", "Peppermint Syrup", "Vanilla Syrup", "Sugar Free Vanilla Syrup"];

  toppings = ["Caramel Crunch", "Cookie Crumble", "Chocolate Mint Cookie Sprinkle"];

  constructor() { }

  ngOnInit(): void {
  }

}
