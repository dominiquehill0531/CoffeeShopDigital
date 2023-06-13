import { Component, KeyValueDiffers, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ERole } from '../models/erole'
import { UserService } from '../_services/user.service';
import { TokenStorageService } from '../_services/token-storage.service';
import { KeyValuePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  rUser: boolean = false;
  rAdmin: boolean = false;
  confirmPassword = "";
  bdayRegexp: string = '^(((0[13578]|(10|12))/(0[1-9]|[1-2][0-9]|3[0-1]))|(02/(0[1-9]|[1-2][0-9]))|((0[469]|11)/(0[1-9]|[1-2][0-9]|30)))$'
  isSuccessful: boolean = false;
  isSignUpFailed: boolean = false;
  errorMessage = "";


  constructor(private token: TokenStorageService, private userService: UserService, private router: Router) {}

  ngOnInit(): void {
  }

  userRegistration() {
    let regRoles: string[] = [];
    if (this.rUser == true) {regRoles.push("USER")};
    if (this.rAdmin == true) {regRoles.push("ADMIN")};
    this.user.role = regRoles;
    this.userService.createUser(this.user).subscribe(
      data => {
        alert("New User is Registered");
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        location.reload();
        },
      err => {
        alert("Please make sure to enter your information correctly");
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    );
  }

  isRegistrarAdmin(): boolean {
    let rolesStr = this.token.getUser()['roles'];
    if (rolesStr != null) {
      if (rolesStr.includes("ADMIN")) {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  doPasswordsMatch(form: NgForm): boolean {
    if (form.value['password'] === form.value['confirmPassword']) {return true;} else {return false;}
  }

}
