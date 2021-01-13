import { Component, OnInit, ViewChild } from '@angular/core';
import { CartService } from 'src/app/services/cart/cart.service';
import { AddProductComponent } from './button/add-product/add-product.component';
import { CustomerEmailNameEntryComponent } from './dialogue-box/customer-email-name-entry/customer-email-name-entry.component';
import { CustomerCashCardSelectionComponent } from './dialogue-box/customer-cash-card-selection/customer-cash-card-selection.component';
import { AmountProvidedCustomerEntryComponent } from './dialogue-box/amount-provided-customer-entry/amount-provided-customer-entry.component';
import { BalanceAmountComponent } from './dialogue-box/balance-amount/balance-amount.component';

import { Cart } from 'src/app/models/Cart';
import { MatTable } from '@angular/material/table';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-vendor-panel',
  templateUrl: './vendor-panel.component.html',
  styleUrls: ['./vendor-panel.component.css'],
})
export class VendorPanelComponent implements OnInit {
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

  @ViewChild(MatTable)
  table!: MatTable<any>;
  products!: Cart[];
  displayedColumns!: String[];
  dataSource!: Cart[];

  constructor(
    private cartService: CartService,
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

  updateProduct(id: number): void {
    if (this.quantityChange.value === 0) {
      this.removeProduct(id);
      return;
    }
    this.cartService
      .update(id, { quantity: this.quantityChange.value })
      .subscribe(
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
    this._snackBar.open('Bill generated', 'Open', {
      duration: 10000,
    });
  }
}
