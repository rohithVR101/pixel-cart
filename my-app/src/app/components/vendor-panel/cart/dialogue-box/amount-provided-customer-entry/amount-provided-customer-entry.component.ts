import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Customer } from 'src/app/models/Customer';
import { Order } from 'src/app/models/Order';
import { BalanceAmountComponent } from '../balance-amount/balance-amount.component';
import { CustomerCashCardSelectionComponent } from '../customer-cash-card-selection/customer-cash-card-selection.component';

@Component({
  selector: 'app-amount-provided-customer-entry',
  templateUrl: './amount-provided-customer-entry.component.html',
  styleUrls: ['./amount-provided-customer-entry.component.css'],
})
export class AmountProvidedCustomerEntryComponent implements OnInit {
  order_data!: Order;

  constructor(
    public dialogRef: MatDialogRef<AmountProvidedCustomerEntryComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {}

  ngOnInit(): void {
    this.order_data = this.data;
    console.log(this.order_data);
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialog.open(CustomerCashCardSelectionComponent, {
      data: this.order_data,
    });
  }

  proceed() {
    this.dialogRef.close();
    this.order_data.Balance_Given =
      Math.round(
        (this.order_data.Received_Amount - this.order_data.Total) * 100
      ) / 100;
    this.dialog.open(BalanceAmountComponent, {
      data: this.order_data,
    });
  }
}
