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

@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css']
})
export class CreateCoffeeComponent implements OnInit {

  user: User = new User();

  milkTypes: MilkTypes[] = MilkTypes.milkTypesList;

  flavors: SweetTypes[] = SweetTypes.sweetTypesList;

  toppings!: Toppings[];

  selectedDrink: undefined | DrinkTypes;

  // milks = ["Please choose an option","Heavy Cream", "Vanilla Sweet Cream", "Non Fat Milk", "2% Milk", "Whole Milk", "Half & Half", "Almond", "Coconut", "Oatmilk", "Soy"];

  //flavors = ["Please choose an option","Brown Sugar Syrup", "Caramel Syrup", "Hazelnut Syrup", "Peppermint Syrup", "Vanilla Syrup", "Sugar Free Vanilla Syrup"];

  //toppings = ["Please choose an option","Caramel Crunch", "Cookie Crumble", "Chocolate Mint Cookie Sprinkle"];

  selectedMilk = [];
  selectedFlavors = [];
  selectedToppings = [];
  selectedSize = "";

  message: string = "";
  constructor(private userService: UserService, private router: Router, private menuService: MenuService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {

    let drinkId = this.activeRoute.snapshot.paramMap.get('drinkId');
    console.log("this is the selected drink id "+ drinkId);
    drinkId && this.menuService.getDrinkById(drinkId).subscribe((data) => {
      this.selectedDrink = data;
    })
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

  goToOrder(){
    //this.router.navigate(['']);
  }

}
