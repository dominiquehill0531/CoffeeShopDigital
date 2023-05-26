import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  user: User = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

   userRegistration(){
      console.log(this.user);
      this.userService.createUser(this.user).subscribe(data=>{
        alert("registration successful")
      }, error=> alert("Please make sure to enter your information correctly"));
    }

}
