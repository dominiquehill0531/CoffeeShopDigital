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
    { name: 'Small', price: 0.00 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Medium', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Large', price: 1.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
  ];

  FlavorsToAdd2: Flavor[] = [
    { name: 'Whole Milk', price: 0.00 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Almond Milk', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Soy Milk', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
//     { name: 'Oat Milk', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
//     { name: 'Lactose Free Milk', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
//     { name: 'Butter Milk', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
  ];

  FlavorsToAdd3: Flavor[] = [
    { name: 'Hot', price: 0.00 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Iced', price: 0.00 ,imageUrl: '/assets/images/ice-tea.jpg'},
  ];

  FlavorsToAdd4: Flavor[] = [
    { name: 'Hazelnut', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Nutmeg', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Cinnamon', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Caramel', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Mocha', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Pumpkin Spice', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Amaretto', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Apple Cider', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Apple Strudel', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Chocolate', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Maple', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
    { name: 'Eggnog', price: 0.99 ,imageUrl: '/assets/images/ice-tea.jpg'},
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

  redirectToCheckout() {
    this.router.navigate(['checkout']);
  }
  redirectToUserHompage() {
    this.router.navigate(['additionaldrink']);
  }

  addToCart(item: Flavor) {
    if (this.FlavorsToAdd3.includes(item)) {
      this.selectedItems = this.selectedItems.filter(selectedItem => !this.FlavorsToAdd3.includes(selectedItem));
      this.selectedItems.push(item);
    } else if (this.FlavorsToAdd2.includes(item)) {
      this.selectedItems = this.selectedItems.filter(selectedItem => !this.FlavorsToAdd2.includes(selectedItem));
      this.selectedItems.push(item);
    } else if (this.FlavorsToAdd.includes(item)) {
      this.selectedItems = this.selectedItems.filter(selectedItem => !this.FlavorsToAdd.includes(selectedItem));
      this.selectedItems.push(item);
    } else if (this.FlavorsToAdd4.includes(item) && !this.selectedItems.includes(item)) {
      this.selectedItems.push(item);
    }
  }

  toggleCartItems() {
    this.showCartItems = !this.showCartItems;
  }
}
