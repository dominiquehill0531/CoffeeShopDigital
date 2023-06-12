import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { TokenStorageService} from 'src/app/_services/token-storage.service';
import { Router, Event, NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUser: any;
  name: any;

  constructor(
        private token: TokenStorageService,
        private userService: UserService,
        private router: Router) { }

  ngOnInit(): void {
    if (sessionStorage.length == 0) {
      sessionStorage.setItem("name", "Guest");
    } else {
      this.router.events.subscribe(
        (event: any) => {
          if (event instanceof NavigationEnd) {
            if (this.token.getUser()) {
              let email = this.token.getUser()['email'];
              let nextName = email.slice(0, email.indexOf("@"));
              this.name = nextName;
            }
          }
        }
      );
    }


  }

  logout(): void {
    this.token.signOut();
    this.name = "Guest";
    this.router.navigate(['/']);
  }

  goToLogin(): void {
    this.router.navigate(['user-login']);
  }

  goToRegistration(): void {
    this.router.navigate(['register-user']);
  }

  isUserLoggedIn(): boolean {
    this.name = sessionStorage.getItem("name");
    if (this.name == null || this.name.indexOf("Guest") == 0) {return false;} else {return true;}
  }

  isNotRegistration(): boolean {
    if (this.router.url != '/register-user') {return true;} else {return false;}
  }

  isNotLoginPg(): boolean {
    if (this.router.url != '/user-login') {return true;} else {return false;}
  }
}
