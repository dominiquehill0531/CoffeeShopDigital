import { Component, OnInit } from '@angular/core';
import { User } from '../_models/user';
import { UserService } from '../_services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MilkTypes } from '../_models/milk-types';
import { MenuService } from '../_services/menu.service';
import { DrinkTypes } from '../_models/drink-types';
import { Flavors } from '../_models/flavors';
import { Toppings } from '../_models/toppings';
import { SweetTypes } from '../_models/sweet-types';
import { DrinkService } from '../_services/drink.service';
import { NonNullAssert } from '@angular/compiler';
import { Drink } from '../_models/Drink';

@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css']
})
export class CreateCoffeeComponent implements OnInit {

  customDrink!: Drink;
  milkTypes: MilkTypes[] = MilkTypes.milkTypesList;
  flavors: SweetTypes[] = SweetTypes.sweetTypesList;
  toppings!: Toppings[];
  selectedType!: DrinkTypes;
  selectedMilk!: MilkTypes;
  selectedFlavors?: SweetTypes[];
  selectedToppings = [];
  selectedSize = "";

  message: string = "";
  constructor(private drinkService: DrinkService, private userService: UserService, private router: Router, private menuService: MenuService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    this.selectedType = this.drinkService.getDrinkByName(sessionStorage.getItem("protoDrink")!);
    this.customDrink.name = this.selectedType.name;
    console.log("this is the selected drink: "+ this.selectedType.name);
  }

  updateSize(size: string){
    this.selectedSize = size;
    console.log(this.selectedSize);
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

  order(){
    console.log("button clicked");
    this.router.navigate(['/order-complete'])
  }

  addToCart(){
    //this.router.navigate(['']);
  }

}
