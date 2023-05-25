import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { LoginuserService } from '../services/loginuser.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  user:User = new User();
  constructor(private loginuserservice:LoginuserService) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.loginuserservice.loginUser(this.user).subscribe(data=>{
      alert("login sucessful")
    }, error=> alert("Please enter correct username and password"));
  }
}
