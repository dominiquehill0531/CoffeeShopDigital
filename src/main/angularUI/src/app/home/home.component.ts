import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../_services/drink.service';
import { Drink } from '../models/Drink';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drinks:Drink[]=[];
  constructor(private drinkService:DrinkService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.drinks = this.drinkService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      else if(params['tag'])
      this.drinks = this.drinkService.getAllDrinkByTag(params['tag'])
      else
      this.drinks = this.drinkService.getAll();
    })

  }

}
