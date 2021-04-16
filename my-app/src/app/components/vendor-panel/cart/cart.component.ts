import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AddProductComponent } from './button/add-product/add-product.component';
import { CustomerEmailNameEntryComponent } from './dialogue-box/customer-email-name-entry/customer-email-name-entry.component';
import { CartService } from 'src/app/services/cart/cart.service';
import { OrderService } from 'src/app/services/order/order.service';
import { Cart } from 'src/app/models/Cart';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Order } from 'src/app/models/Order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit, AfterViewInit {
  quantityChange!: FormControl;
  taxtotal!: number;
  discounttotal!: number;
  total!: number;
  payment_mode!: string;
  paid!: number;
  balance_given!: number;
  total_quantity!: number;

  product_id!: number;

  order_data: Order = new Order(
    '',
    '',
    '',
    '',
    '',
    -1,
    '',
    -1,
    -1,
    -1,
    '',
    '',
    '',
    '',
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
  );
  bill_subscription!: Subscription;
  handler: any = null;

  @ViewChild(MatTable)
  table!: MatTable<any>;
  products!: Cart[];
  displayedColumns!: String[];
  dataSource: Cart[] = [];

  constructor(
    private cartService: CartService,
    private orderService: OrderService,
    public dialog: MatDialog
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

  ngAfterViewInit() {
    setTimeout(() => {
      this.order_data.Subtotal =
        Math.round(this.products.reduce((n, { Price }) => n + Price, 0) * 100) /
        100;
      this.order_data.Discount = 0;
      this.taxtotal = Math.round(this.order_data.Subtotal * 0.05 * 100) / 100;
      this.order_data.Total =
        Math.round(
          (this.order_data.Subtotal +
            this.taxtotal -
            this.order_data.Discount) *
            100
        ) / 100;
    }, 500);
  }

  refreshList(): void {
    this.cartService.refresh().subscribe(
      (data) => {
        this.products = data;
        this.table.renderRows();
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

  updateOrderData(): void {
    this.cartService.refresh().subscribe((data) => {
      this.total_quantity = data.reduce((n, { Quantity }) => n + Quantity, 0);
      this.order_data.Bill_No =
        (3 - ('' + data[0].Cart_Session_ID).length > 0
          ? new Array(3 - ('' + data[0].Cart_Session_ID).length + 1).join('0')
          : '') + data[0].Cart_Session_ID;
      this.order_data.Order_Date = new Date().toDateString();
      this.order_data.Order_Time = new Date().toLocaleTimeString();
      this.order_data.CGST = this.taxtotal / 2;
      this.order_data.SGST = this.taxtotal / 2;
      this.order_data.Discount = this.order_data.Discount;
    });
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
    this.order_data.Subtotal =
      Math.round(this.products.reduce((n, { Price }) => n + Price, 0) * 100) /
      100;
    this.order_data.Discount = 0;
    this.taxtotal = Math.round(this.order_data.Subtotal * 0.05 * 100) / 100;
    this.order_data.Total =
      Math.round(
        (this.order_data.Subtotal + this.taxtotal - this.order_data.Discount) *
          100
      ) / 100;
  }

  proceed(): void {
    this.orderService.clear().subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
    this.updateOrderData();
    this.dialog.open(CustomerEmailNameEntryComponent, {
      data: this.order_data,
    });
  }
}
