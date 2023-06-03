import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {}
interface Item {
  price: number,
  name: string,
  imageUrl: string,
}
@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {
  ItemsForSale: Item[] = [
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Capachino', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Tea', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Bubble Tea', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Expresso', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Flower Tea', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},
    { name: 'Coffee', price: 2.99,imageUrl: '/assets/images/almond toffee.png'},


  ]
  
  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }
  gotoOrderItem() {
    this.router.navigate(['/order-item-specifics']);
  }
  goToLoginPage() {
    this.router.navigate(['/user-login']);
  }
}
