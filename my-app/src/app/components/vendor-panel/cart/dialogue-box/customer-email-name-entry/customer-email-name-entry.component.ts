import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { CustomerCashCardSelectionComponent } from '../customer-cash-card-selection/customer-cash-card-selection.component';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-customer-email-name-entry',
  templateUrl: './customer-email-name-entry.component.html',
  styleUrls: ['./customer-email-name-entry.component.css'],
})
export class CustomerEmailNameEntryComponent implements OnInit {
  form!: FormGroup;
  order_data!: Order;

  constructor(
    public dialogRef: MatDialogRef<CustomerEmailNameEntryComponent>,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {}

  ngOnInit(): void {
    this.order_data = this.data;
    console.log(this.order_data);
    this.form = this.formBuilder.group({
      emailFormControl: [
        this.order_data.Customer_Email,
        [Validators.required, Validators.email],
      ],
      nameFormControl: [this.order_data.Customer_Name, [Validators.required]],
      phoneno: [
        this.order_data.Customer_Phone,
        [Validators.required, Validators.pattern('(0/91)?[7-9][0-9]{9}')],
      ],
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  proceed() {
    this.order_data.Customer_Phone = this.form.controls['phoneno'].value;
    this.order_data.Customer_Email = this.form.controls[
      'emailFormControl'
    ].value;
    this.order_data.Customer_Name = this.form.controls['nameFormControl'].value;
    this.dialog.open(CustomerCashCardSelectionComponent, {
      data: this.order_data,
    });
  }
}
