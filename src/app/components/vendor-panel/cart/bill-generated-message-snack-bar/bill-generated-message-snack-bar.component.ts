import { Component, OnInit, Inject } from '@angular/core';
import {
  MAT_SNACK_BAR_DATA,
  MatSnackBarRef,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-bill-generated-message-snack-bar',
  templateUrl: './bill-generated-message-snack-bar.component.html',
  styleUrls: ['./bill-generated-message-snack-bar.component.css'],
})
export class BillGeneratedMessageSnackBarComponent implements OnInit {
  constructor(
    private billCard: MatSnackBarRef<BillGeneratedMessageSnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: object
  ) {}

  ngOnInit(): void {}
  printBill(): void {
    console.log(this.data);
  }

  close(): void {
    this.billCard.dismiss();
  }
}
