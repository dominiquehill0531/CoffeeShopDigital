import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MilkTypes } from '../models/milk-types';
import { MenuService } from '../services/menu.service';
import { Flavors } from '../models/flavors';

@Component({
  selector: 'app-create-coffee',
  templateUrl: './create-coffee.component.html',
  styleUrls: ['./create-coffee.component.css']
})
export class CreateCoffeeComponent implements OnInit {

  user: User = new User();

  milkTypes!: MilkTypes[];

  flavorTypes!: Flavors[];

  // milks = ["Please choose an option","Heavy Cream", "Vanilla Sweet Cream", "Non Fat Milk", "2% Milk", "Whole Milk", "Half & Half", "Almond", "Coconut", "Oatmilk", "Soy"];

  //flavors = ["Please choose an option","Brown Sugar Syrup", "Caramel Syrup", "Hazelnut Syrup", "Peppermint Syrup", "Vanilla Syrup", "Sugar Free Vanilla Syrup"];

  toppings = ["Please choose an option","Caramel Crunch", "Cookie Crumble", "Chocolate Mint Cookie Sprinkle"];

  selectedMilk = [];
  selectedFlavors = [];
  selectedToppings = [];
  selectedSize = "";

  message: string = "";
  constructor(private userService: UserService, private router: Router, private menuService: MenuService) { }

  ngOnInit(): void {
    this.menuService.getMilkTypes().subscribe((data: MilkTypes[]) => {
      console.log(data);
      this.milkTypes = data;
    })

    this.menuService.getFlavors().subscribe((data: Flavors[]) => {
      console.log(data);
      this.flavorTypes = data;
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


  logoutUser(){
    console.log("inside logout user");
    console.log(this.user);
    // this.user.email="newUser@email.com";
    // this.user.password="test";
    // this.user.role=""
    // this.user.birthday="";
    this.userService.logout(this.user).subscribe(data => {
      alert("You've been signed out!")
      this.router.navigate(['/user-login']);
    })
  }

}
