import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/main/angularUI/src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = sessionStorage.getItem("name");

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  logout(): void {
    this.userService.logoutUser();
    this.router.navigate(['/']);
  }
}
