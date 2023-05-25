import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-edit-page',
  templateUrl: './admin-edit-page.component.html',
  styleUrls: ['./admin-edit-page.component.css']
})
export class AdminEditPageComponent implements OnInit {

  menuList = ['Menu', 'Coffee', 'Tea', 'Pastry'];

  constructor() { }

  ngOnInit(): void {
  }

}
