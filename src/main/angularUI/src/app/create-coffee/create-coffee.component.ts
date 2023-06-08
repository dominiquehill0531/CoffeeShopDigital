import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css']
})
export class CreateCoffeeComponent implements OnInit {
  milks = ["Please choose an option","Heavy Cream", "Vanilla Sweet Cream", "Non Fat Milk", "2% Milk", "Whole Milk", "Half & Half", "Almond", "Coconut", "Oatmilk", "Soy"];

  flavors = ["Please choose an option","Brown Sugar Syrup", "Caramel Syrup", "Hazelnut Syrup", "Peppermint Syrup", "Vanilla Syrup", "Sugar Free Vanilla Syrup"];

  toppings = ["Please choose an option","Caramel Crunch", "Cookie Crumble", "Chocolate Mint Cookie Sprinkle"];

  selectedMilk = [];
  selectedFlavors = [];
  selectedToppings = [];
  selectedSize = "";

  message: string = "";
  constructor(private appService: AppService) { 
    this.appService.getMessage.subscribe(msg => this.message = msg);;
  }

  ngOnInit(): void {
  }

  updateSize(size: string){
    this.selectedSize = size;
  }

  selectedMilkHandler(event: any){
    this.selectedMilk = event.target.value;
    console.log(this.selectedMilk);
  }

  selectedFlavorsHandler(event: any){
    this.selectedFlavors = event.target.value;
    console.log(this.selectedFlavors);
  }

  selectedToppingsHandler(event: any){
    this.selectedToppings = event.target.value;
    console.log(this.selectedToppings);
  }

}
