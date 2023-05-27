import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.css']
})
export class UserLoginPageComponent implements OnInit {

  user:User = new User();
  constructor(private userService: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  userLogin(){
    console.log(this.user);
    this.userService.loginUser(this.user).subscribe(data=>{
      alert("login successful");
      this.router.navigate(['/user-homepage']);
    }, error=> alert("Please enter correct username and password"));
  }
}
