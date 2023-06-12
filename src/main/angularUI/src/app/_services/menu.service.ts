import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MilkTypes } from '../models/milk-types';
import { DrinkTypes } from '../models/drink-types';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseUrl = "http://localhost:8080/api/type";

  constructor(private http: HttpClient) { }

  getMilkTypes(): Observable<MilkTypes[]> {
    return this.http.get<MilkTypes[]>(`${this.baseUrl}/milkType`);
  }

  getDrinkTypes(): Observable<DrinkTypes[]> {
    return this.http.get<DrinkTypes[]>(`${this.baseUrl}/drinkTypes`) 
  }
}
