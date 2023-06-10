import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Flavor {
  price: number;
  name: string;
  imageUrl: string;
}

@Component({
  selector: 'app-flavor',
  templateUrl: './flavor.component.html',
  styleUrls: ['./flavor.component.css']
})
export class FlavorComponent {
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
  showCartItems = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  goToLoginPage() {
    this.router.navigate(['/user-login']);
  }
  redirectToHomepage() {
    this.router.navigate(['/user-homepage']);
  }

  addToCart(item: Flavor) {
    this.selectedItems.push(item);
  }

  toggleCartItems() {
    this.showCartItems = !this.showCartItems;
  }
}


