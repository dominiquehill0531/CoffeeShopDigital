import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

import { UserService } from '../_services/user.service';
import { MilkTypes } from '../_models/milk-types';
import { MenuService } from '../_services/menu.service';
import { DrinkTypes } from '../_models/drink-types';
import { SweetTypes } from '../_models/sweet-types';
import { DrinkService } from '../_services/drink.service';
import { Drink } from '../_models/Drink';
import { SizeTypes } from '../_models/size-types';

@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css']
})
export class CreateCoffeeComponent implements OnInit {

  @Input()
  customDrink!: Drink;
  
  private milkTypes: MilkTypes[] = MilkTypes.milkTypesList;
  private flavors: SweetTypes[] = SweetTypes.sweetTypesList;
  private sizes: SizeTypes[] = SizeTypes.sizeList;
  
  @Input()
  selectedFlavors: SweetTypes[] = [];

  constructor(private drinkService: DrinkService, private userService: UserService, private router: Router, private menuService: MenuService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    
    let selectedType = this.drinkService.getDrinkByName(sessionStorage.getItem("protoDrink")!);
    this.customDrink = new Drink(selectedType.name, selectedType.price, selectedType.imageUrl);
    console.log("this is the selected drink: "+ selectedType.name);
  }

  selectedFlavorsHandler() {
    this.flavors.forEach(option => {
      if (option.isChosen) {
        this.selectedFlavors!.push(option);
        this.customDrink.options.push(option.name, option.addPrice)
      }
    })
    this.customDrink.flavors = this.selectedFlavors;
  }

  miscCustomizationsHandler() {
    let icedChecked: any = document.getElementById('isIced')!.valueOf();
    let decafChecked: any = document.getElementById('isDecaf')!.valueOf();
    let splashChecked: any = document.getElementById('milkSplash')!.valueOf();
    if (icedChecked == true) {
      this.customDrink.isDrinkIced = icedChecked;
      this.customDrink.options?.push("\nIced");
    }
    if (decafChecked == true) {
      this.customDrink.isDecaf = decafChecked;
      this.customDrink.options?.push("\nDecaf");
    }
    if (splashChecked == true) {
      this.customDrink.hasSplashMilk = splashChecked;
      this.customDrink.options?.push(`\nSplash of ${this.customDrink.milkChoice?.name} Milk`);
    }
  }

  getMilkOptions() {return this.milkTypes;}
  getFlavorOptions() {return this.flavors;}
  getSizeOptions() {return this.sizes;}

  addToCart() {
    this.selectedFlavorsHandler();
    this.miscCustomizationsHandler();
    console.log(this.customDrink);
  }

}
