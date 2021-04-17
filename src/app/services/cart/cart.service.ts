import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cart } from "../../models/Cart";

@Injectable({
  providedIn: 'root',
})
export class CartService {
  baseUrl = 'https://pixel-cart-cloud.herokuapp.com/api/cart';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  new(): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, {});
  }

  add(id: number): Observable<Cart> {
    console.log('POSTT');
    return this.http.post<Cart>(`${this.baseUrl}/add/${id}`, []);
  }

  update(id: number, data: object): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refresh(): Observable<Cart[]> {
    return this.http.get<Cart[]>(this.baseUrl);
  }

  clear(): Observable<Cart[]> {
    return this.http.delete<Cart[]>(this.baseUrl);
  }
}
