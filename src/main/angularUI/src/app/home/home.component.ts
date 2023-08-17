import { Component, OnInit } from '@angular/core';
import { DrinkService } from '../_services/drink.service';
import { Drink } from '../_models/Drink';
import { ActivatedRoute } from '@angular/router';
import { DrinkTypes } from '../_models/drink-types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  drinkTypes: DrinkTypes[] = [];
  constructor(private drinkService:DrinkService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if(params['searchTerm'])
      this.drinkTypes = this.drinkService.getAll().filter(food => food.name.toLowerCase().includes(params['searchTerm'].toLowerCase()))
      else
      this.drinkTypes = this.drinkService.getAll();
    })
  }

}
