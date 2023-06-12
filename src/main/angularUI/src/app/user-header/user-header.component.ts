import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  router: any;

  constructor() { }

  ngOnInit(): void {
  }
  goToShoppingCart(){
    this.router.navigate(['/cart-page']);
  }

}
