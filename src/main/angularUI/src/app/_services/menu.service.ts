import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MilkTypes } from '../_models/milk-types';
import { DrinkTypes } from '../_models/drink-types';
import { Flavors } from '../_models/flavors';
import { Toppings } from '../_models/toppings';

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
    return this.http.get<DrinkTypes[]>(`${this.baseUrl}/drinkTypes`); 
  }

  getDrinkById(id: string): Observable<DrinkTypes> { 
    this.baseUrl = this.baseUrl + "/drink";
    let queryPramas = new HttpParams().append("drinkId", id); 
    return this.http.get<DrinkTypes>(`${this.baseUrl}`, {params: queryPramas}); 
  }

  getFlavors(): Observable<Flavors[]> {
    return this.http.get<Flavors[]>(`${this.baseUrl}/flavors`);
  }

  getToppings(): Observable<Toppings[]> {
    return this.http.get<Toppings[]>(`${this.baseUrl}/toppings`);
  }
}
