import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  user: User = new User();
  jwtResp: any;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];


  constructor(private userService: UserService, private tokenStorage: TokenStorageService, private router: Router ) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  userLogin(): void {
    this.userService.loginUser(this.user).subscribe(
      data => {
        alert("login successful");
        this.tokenStorage.saveToken(data['accessToken']);
        this.tokenStorage.saveUser(data);
        let nextEmail = this.tokenStorage.getUser()['email'];
        let nextName = nextEmail.slice(0, nextEmail.indexOf("@"));
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        sessionStorage.setItem("name", nextName);
        this.router.navigate(['/user-homepage']);
      },
      error => {
        alert("Please enter correct username and password");
        this.isLoginFailed = true;
      }
    );
  }

  goLogin(){
    this.router.navigate(['/home']);
  }
}
