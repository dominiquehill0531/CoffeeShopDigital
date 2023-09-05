import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = "http://localhost:8080/api/auth";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(private httpClient: HttpClient) { }

  createUser(user: User): Observable<any> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/register/user`, user, this.httpOptions);
  }

  loginUser(user: User): Observable<any> {
    console.log(user);
    return this.httpClient.post(`${this.baseUrl}/login`, user, this.httpOptions);
  }
}
