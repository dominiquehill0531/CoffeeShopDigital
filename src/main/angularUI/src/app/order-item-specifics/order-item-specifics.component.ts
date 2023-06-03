import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Flavor {
  price: number,
  name: string,
  imageUrl: string;
}

@Component({
  selector: 'app-order-item-specifics',
  templateUrl: './order-item-specifics.component.html',
  styleUrls: ['./order-item-specifics.component.css']
})
export class OrderItemSpecificsComponent implements OnInit {
  FlavorsToAdd: Flavor[] = [
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
  ];

  FlavorsToAdd2: Flavor[] = [
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
  ];

  FlavorsToAdd3: Flavor[] = [
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
  ];

  FlavorsToAdd4: Flavor[] = [
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
  ];

  selectedItems: Flavor[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLoginPage() {
    this.router.navigate(['/user-login']);
  }

  addToCart(item: Flavor) {
    this.selectedItems.push(item);
  }
}
