import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { ERole } from '../models/erole'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();
  confirmPassword: string = "";
  rUser: boolean = false;
  rAdmin: boolean = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  userRegistration() {
    let regRoles: string[] = [];
    if (this.rUser==true) {regRoles.push("USER")};
    if (this.rAdmin==true) {regRoles.push("ADMIN")};
    this.user.role = regRoles;
    if (this.confirmPassword==this.user.password) {
      console.log(this.user);
      if (regRoles.includes("ADMIN")) {
        this.userService.createAdmin(this.user).subscribe(data=>{
          alert("New Admin is Registered");
        }, error=> alert("Please make sure to enter your information correctly"));
      } else {
        this.userService.createUser(this.user).subscribe(data=>{
                alert("New User is Registered");
              }, error=> alert("Please make sure to enter your information correctly"));
      }
    }
  }

}
