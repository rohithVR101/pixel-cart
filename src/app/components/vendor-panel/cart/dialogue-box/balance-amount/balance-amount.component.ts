import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Order } from 'src/app/models/Order';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { BillGeneratedMessageSnackBarComponent } from '../../bill-generated-message-snack-bar/bill-generated-message-snack-bar.component';

@Component({
  selector: 'app-balance-amount',
  templateUrl: './balance-amount.component.html',
  styleUrls: ['./balance-amount.component.css'],
})
export class BalanceAmountComponent implements OnInit {
  order_data!: Order;
  constructor(
    public dialogRef: MatDialogRef<BalanceAmountComponent>,
    private _snackBar: MatSnackBar,
    private orderService: OrderService,
    private cartService: CartService,
    @Inject(MAT_DIALOG_DATA) public data: Order
  ) {}

  ngOnInit(): void {
    this.order_data = this.data;
    console.log(this.order_data);
  }

  goToBill() {
    this._snackBar.openFromComponent(BillGeneratedMessageSnackBarComponent);
    this.createOrder();
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
