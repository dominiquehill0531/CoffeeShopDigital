import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/auth";

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/register/user`, user);
  }

  createAdmin(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/register/admin`, user);
  }

  loginUser(user: User): Observable<object> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/login`, user);
  }

  readUser(): Observable<object> {
    return this.httpClient.get(`${this.baseUrl}/user-details`, {observe: "body", responseType: "json"});
  }

  logout(user: User): Observable<object> {
    console.log("from logout " + user.email);
    // console.log("from logout " + user.password);
    return this.httpClient.post(`${this.baseUrl}/logout`, user)    
  }
}
