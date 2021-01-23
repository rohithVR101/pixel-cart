import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export class Amount {
  amount!: number;
}

@Component({
  selector: 'app-amount-provided-customer-entry',
  templateUrl: './amount-provided-customer-entry.component.html',
  styleUrls: ['./amount-provided-customer-entry.component.css'],
})
export class AmountProvidedCustomerEntryComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<AmountProvidedCustomerEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Amount
  ) {}

  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
