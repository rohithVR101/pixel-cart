import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Order } from '../../models/Order';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  baseUrl = 'http://localhost:3000/api/orders';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  new(data: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/new`, data);
  }

  bill(bill_no: string): Observable<any> {
    return this.http.get<Order[]>(`${this.baseUrl}/bill/${bill_no}`);
  }

  //   add(id: number): Observable<Order> {
  //     return this.http.post<Order>(`${this.baseUrl}/add/${id}`, []);
  //   }

  update(id: number, data: object): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, data);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`);
  }

  refresh(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  clear(): Observable<Order[]> {
    return this.http.delete<Order[]>(this.baseUrl);
  }
}
