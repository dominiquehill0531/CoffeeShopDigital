import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import {}

@Component({
  selector: 'app-user-homepage',
  templateUrl: './user-homepage.component.html',
  styleUrls: ['./user-homepage.component.css']
})
export class UserHomepageComponent implements OnInit {

  constructor(private router: Router) { 
  }

  ngOnInit(): void {
  }
  gotoOrderItem() {
    this.router.navigate(['/order-item-specifics']);
  }
}
