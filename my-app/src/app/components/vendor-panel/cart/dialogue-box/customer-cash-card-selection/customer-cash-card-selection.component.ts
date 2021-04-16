import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { PaymentService } from 'src/app/services/payment/payment.service';
import { environment } from 'src/environments/environment';
import { BillGeneratedMessageSnackBarComponent } from '../../bill-generated-message-snack-bar/bill-generated-message-snack-bar.component';
import { AmountProvidedCustomerEntryComponent } from '../amount-provided-customer-entry/amount-provided-customer-entry.component';
import { CustomerEmailNameEntryComponent } from '../customer-email-name-entry/customer-email-name-entry.component';

declare var Razorpay: any;

@Component({
  selector: 'app-customer-cash-card-selection',
  templateUrl: './customer-cash-card-selection.component.html',
  styleUrls: ['./customer-cash-card-selection.component.css'],
})
export class CustomerCashCardSelectionComponent implements OnInit {
  payment_mode: any;
  order_data!: Order;

  constructor(
    public dialogRef: MatDialogRef<CustomerCashCardSelectionComponent>,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private paymentService: PaymentService,
    private orderService: OrderService,
    private cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {}

  ngOnInit(): void {
    this.order_data = this.data;
    this.payment_mode = this.order_data.Payment_Mode;
    console.log(this.order_data);
  }

  onNoClick(): void {
    this.dialogRef.close();
    this.dialog.open(CustomerEmailNameEntryComponent, {
      data: this.order_data,
    });
  }

  proceed() {
    this.dialogRef.close();
    this.order_data.Payment_Mode =
      this.payment_mode.substring(0, 1).toUpperCase() +
      this.payment_mode.substring(1);
    if (this.payment_mode === 'cash') {
      this.dialog.open(AmountProvidedCustomerEntryComponent, {
        data: this.order_data,
      });
    } else if (this.payment_mode === 'online') {
      this.paymentService
        .process({
          amount: this.order_data.Total * 100,
          order_id: this.order_data.Bill_No,
        })
        .subscribe(
          (data) => {
            this.order_data.Order_ID = data.text;
            this.payWithRazorpay();
          },
          (error) => {
            console.log(error);
          }
        );
      this.createOrder();
      this._snackBar.openFromComponent(BillGeneratedMessageSnackBarComponent);
    }
  }

  payWithRazorpay() {
    var options = {
      key: environment.key_id, // Enter the Key ID generated from the Dashboard
      amount: this.order_data.Total * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
      currency: 'INR',
      name: 'Pixel Cart',
      description: 'Online Transaction',
      image: '/assets/images/logo.png',
      order_id: this.order_data.Order_ID, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: function (response: any) {
        console.log(response.razorpay_payment_id);
      },
      prefill: {
        name: this.order_data.Customer_Name,
        email: this.order_data.Customer_Email,
        contact: this.order_data.Customer_Phone,
      },
      notes: {
        address: 'Razorpay Corporate Office',
      },
      theme: {
        color: '#9C27B0',
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on('payment.failed', function (response: any) {
      console.log(response.error.code);
      console.log(response.error.description);
      console.log(response.error.source);
      console.log(response.error.step);
      console.log(response.error.reason);
      console.log(response.error.metadata.order_id);
      console.log(response.error.metadata.payment_id);
    });
    rzp1.open();
  }

  createOrder(): void {
    this.cartService.refresh().subscribe(
      (data) => {
        data.forEach((product) => {
          this.orderService
            .new({
              Bill_No: this.order_data.Bill_No,
              Product_ID: product.Product_ID,
              Product_Name: product.Product_Name,
              Quantity: product.Quantity,
              Rate: product.Price,
              Amount: product.Quantity * product.Price,
              Order_Date: this.order_data.Order_Date,
              Order_Time: this.order_data.Order_Time,
              Payment_Mode: this.order_data.Payment_Mode,
              Received_Amount: this.order_data.Received_Amount,
              Balance_Given: this.order_data.Balance_Given,
              CGST: this.order_data.CGST,
              SGST: this.order_data.SGST,
              Discount: this.order_data.Discount,
              Sub_Total: this.order_data.Subtotal,
              Total: this.order_data.Total,
            })
            .subscribe(
              (data) => {
                console.log(data);
              },
              (error) => {
                console.log(error);
              }
            );
        });
        // this.sendOrderData(this.order_data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
