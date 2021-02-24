import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

import { AddProductComponent } from './button/add-product/add-product.component';
import { CustomerEmailNameEntryComponent } from './dialogue-box/customer-email-name-entry/customer-email-name-entry.component';
import { CustomerCashCardSelectionComponent } from './dialogue-box/customer-cash-card-selection/customer-cash-card-selection.component';
import { AmountProvidedCustomerEntryComponent } from './dialogue-box/amount-provided-customer-entry/amount-provided-customer-entry.component';
import { BalanceAmountComponent } from './dialogue-box/balance-amount/balance-amount.component';
import { BillGeneratedMessageSnackBarComponent } from './bill-generated-message-snack-bar/bill-generated-message-snack-bar.component';

import { CartService } from 'src/app/services/cart/cart.service';
import { BillService } from 'src/app/services/bill/bill.service';

import { Cart } from 'src/app/models/Cart';

import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  quantityChange!: FormControl;

  subtotal!: number;
  taxtotal!: number;
  discounttotal!: number;
  total!: number;
  paid!: number;

  product_id!: number;
  customer_phone!: string;
  customer_name!: string;
  customer_email!: string;
  payment_mode!: string;

  order_data!: object;
  bill_subscription!: Subscription;

  @ViewChild(MatTable)
  table!: MatTable<any>;
  products!: Cart[];
  displayedColumns!: String[];
  dataSource!: Cart[];

  constructor(
    private cartService: CartService,
    private billService: BillService,
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.quantityChange = new FormControl();
    this.displayedColumns = [
      'product_id',
      'product_name',
      'quantity',
      'price',
      'remove',
    ];
    this.refreshList();
    this.dataSource = this.products;
    this.bill_subscription = this.billService.currentOrderData.subscribe(
      (order) => (this.order_data = order)
    );
  }

  refreshList(): void {
    this.cartService.refresh().subscribe(
      (data) => {
        this.products = data;
        this.table.renderRows();
        console.log(this.products);
        this.updateTotal();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      data: { Product_ID: this.product_id },
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.cartService.add(result).subscribe(
        (data) => {
          this.refreshList();
        },
        (error) => {
          console.log(error);
        }
      );
    });
  }

  updateProduct(id: number, quantity: number): void {
    if (quantity === 0) {
      this.removeProduct(id);
      return;
    }
    this.cartService.update(id, { quantity: quantity }).subscribe(
      (data) => {
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeProduct(id: number): void {
    this.cartService.delete(id).subscribe(
      (data) => {
        this.refreshList();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  removeAllProducts(): void {
    this.cartService.clear().subscribe(
      (data) => {},
      (error) => {
        this.products = [];
        this.refreshList();
        console.log(error);
      }
    );
  }

  updateTotal() {
    this.subtotal =
      Math.round(this.products.reduce((n, { Price }) => n + Price, 0) * 100) /
      100;
    this.discounttotal = 0;
    this.taxtotal = Math.round(this.subtotal * 0.05 * 100) / 100;
    this.total =
      Math.round((this.subtotal + this.taxtotal - this.discounttotal) * 100) /
      100;
  }

  proceed(): void {
    const dialogRef = this.dialog.open(CustomerEmailNameEntryComponent, {
      data: {
        Customer_Email: this.customer_email,
        Customer_Name: this.customer_name,
        Customer_Phone: this.customer_phone,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
      const dialogRef = this.dialog.open(CustomerCashCardSelectionComponent, {
        data: {
          payment_mode: this.payment_mode,
        },
      });

      dialogRef.afterClosed().subscribe((result) => {
        console.log(result);
        this.payment_mode = result;
        if (result === 'cash') {
          console.log('HYAAAAAAA');
          const dialogRef = this.dialog.open(
            AmountProvidedCustomerEntryComponent,
            {
              data: {
                amount: this.paid,
              },
            }
          );

          dialogRef.afterClosed().subscribe((result: number) => {
            console.log(result - this.total);
            this.paid = Math.round((result - this.total) * 100) / 100;
            const dialogRef = this.dialog.open(BalanceAmountComponent, {
              data: {
                balance_amount: this.paid,
              },
            });

            dialogRef.afterClosed().subscribe((result) => {
              console.log(result);
              this.openSnackBar();
            });
          });
        } else {
          this.openSnackBar();
        }
      });
    });
  }
  openSnackBar() {
    this.cartService.refresh().subscribe(
      (data) => {
        this._snackBar.openFromComponent(BillGeneratedMessageSnackBarComponent);
        this.order_data = {
          data: data,
          bill_no:
            (3 - ('' + data[0].Cart_Session_ID).length > 0
              ? new Array(3 - ('' + data[0].Cart_Session_ID).length + 1).join(
                  '0'
                )
              : '') + data[0].Cart_Session_ID,
          date: new Date().toDateString(),
          time: new Date().toLocaleTimeString(),
          payment_mode:
            this.payment_mode.substring(0, 1).toUpperCase() +
            this.payment_mode.substring(1),
          amount_paid: this.paid,
          total_items: data.reduce((n, { Quantity }) => n + Quantity, 0),
        };
        this.billService.updateOrderData(this.order_data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
