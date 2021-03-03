import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private _orderDataSource = new BehaviorSubject<object>({
    data: {},
    bill_no: 0,
    date: new Date().toDateString(),
    time: new Date().toLocaleTimeString(),
    payment_mode: '',
    amount_paid: 0,
    total_items: 0,
  });
  orderData$ = this._orderDataSource.asObservable();

  constructor() {}

  updateOrderData(order: object) {
    this._orderDataSource.next(order);
  }
}
