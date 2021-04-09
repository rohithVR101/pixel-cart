import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  baseUrl = 'https://siet-cart.herokuapp.com/api/payment';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  pay(data: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/pay`, data);
  }

  process(data: object): Observable<any> {
    return this.http.post(`${this.baseUrl}/process`, data, {
      responseType: 'text',
    });
  }
}
