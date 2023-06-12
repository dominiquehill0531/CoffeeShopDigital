import { Component, OnInit } from '@angular/core';
import { DrinkTypes } from '../models/drink-types';
import { DrinkService } from '../services/drink.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})
export class AdminEditPageComponent implements OnInit {

  menuList = ['Menu', 'Coffee', 'Tea', 'Pastry'];

  addDrink: DrinkTypes = new DrinkTypes();

  drinkTypes!: DrinkTypes[];

  constructor(private drinkService: DrinkService, private http: HttpClient) { }

  submitForm() {
    if (this.drinkTypes && this.drinkTypes.length > 0) {
    const addDrink = {
    name: this.drinkTypes[0].name,
    price: this.drinkTypes[0].price,
    imageUrl: this.drinkTypes[0].imageUrl
    }
  } else console.error('Form error.');
  }

  ngOnInit(): void {
    this.drinkService.getDrinkTypes().subscribe((data: DrinkTypes[]) => {
      console.log(data);
      this.drinkTypes = data;
    }, (error: any) => {
      console.error('Error adding drink:', error);
    });
  }
}
