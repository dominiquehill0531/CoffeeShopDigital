import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name = sessionStorage.getItem("name");
  private static guestId = 1;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if (this.name == null) {
      this.name = `Guest${HeaderComponent.guestId}`;
      HeaderComponent.guestId++;
    }
  }

  logout(): void {
    this.userService.logoutUser();
    this.router.navigate(['/']);
  }

  goToLogin(): void {
    this.router.navigate(['user-login']);
  }

  goToRegistration(): void {
    this.router.navigate(['register-user']);
  }

  isUserLoggedIn(): boolean {
    if (this.name == null || this.name.indexOf("Guest") == 0) {return false;} else {return true;}
  }
}
