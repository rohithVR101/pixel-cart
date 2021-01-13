import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';

export class Balance {
  balance_amount!: number;
}

@Component({
  selector: 'app-balance-amount',
  templateUrl: './balance-amount.component.html',
  styleUrls: ['./balance-amount.component.css'],
})
export class BalanceAmountComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<BalanceAmountComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Balance
  ) {}

  ngOnInit(): void {}
}
