import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { BillService } from 'src/app/services/bill/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  order_data!: object;
  bill_subscription!: Subscription;

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    this.bill_subscription = this.billService.currentOrderData.subscribe(
      (order) => (this.order_data = order)
    );
    console.log(this.order_data);
    window.print();
  }
}
