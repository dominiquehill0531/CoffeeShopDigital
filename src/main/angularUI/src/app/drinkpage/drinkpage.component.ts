import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/Drink';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { DrinkService } from '../services/drink.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-drinkpage',
  templateUrl: './drinkpage.component.html',
  styleUrls: ['./drinkpage.component.css']
})
export class DrinkpageComponent implements OnInit {

  drink!: Drink;
  constructor(private activatedRoute: ActivatedRoute, 
              private drinkService: DrinkService, 
              private cartSerive: CartService,
              private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params['id'])
        this.drink = this.drinkService.getDrinkById(params['id']);
    });
  }


  ngOnInit(): void {
  }

  addToCart(){
    this.cartSerive.addToCart(this.drink);
    this.router.navigateByUrl('/home/cart-page');
  }

  

}
