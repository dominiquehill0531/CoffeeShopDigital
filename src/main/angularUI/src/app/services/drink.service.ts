import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DrinkTypes } from '../models/drink-types';

@Injectable({
  providedIn: 'root'
})
export class DrinkService {

  private baseUrl = "http://localhost:8080/api/type";

  constructor(private http: HttpClient) {}

  getDrinkTypes(): Observable<DrinkTypes[]> {
    return this.http.get<DrinkTypes[]>(`${this.baseUrl}/admin-edit/drinkTypes1`);
  }

  addDrink(drink: DrinkTypes): Observable<DrinkTypes> {
    return this.http.post<DrinkTypes>(`${this.baseUrl}/admin-edit`, drink);
  }

  removeDrink(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/admin-edit/${id}`);
  }

}



