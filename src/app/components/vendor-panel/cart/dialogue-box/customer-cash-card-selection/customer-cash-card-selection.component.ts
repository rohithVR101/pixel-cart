import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

export class Payment{
  payment_mode! : string;
}

@Component({
  selector: 'app-customer-cash-card-selection',
  templateUrl: './customer-cash-card-selection.component.html',
  styleUrls: ['./customer-cash-card-selection.component.css'],
})
export class CustomerCashCardSelectionComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CustomerCashCardSelectionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Payment
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
