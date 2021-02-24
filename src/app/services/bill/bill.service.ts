import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BillService {
  private orderData = new BehaviorSubject({});
  currentOrderData = this.orderData.asObservable();
  constructor() {}

  updateOrderData(order: object) {
    this.orderData.next(order);
  }
}
