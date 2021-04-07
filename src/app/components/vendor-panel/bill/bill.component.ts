import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/models/Order';
import { Product } from 'src/app/models/Product';
import { OrderService } from 'src/app/services/order/order.service';
import { UtilityService } from 'src/app/services/utility/utility.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  orderData$!: object;

  bill_no!: string;
  order_date!: string;
  order_time!: string;
  payment_mode!: string;
  subtotal!: number;
  paid!: number;
  balance_given!: number;
  cgst!: number;
  sgst!: number;
  taxtotal!: number;
  discounttotal!: number;
  total!: number;
  total_text!: string;
  numbers!: number[];

  products!: Order[];

  constructor(
    private orderService: OrderService,
    private utilityService: UtilityService
  ) {}

  ngOnInit() {
    this.getBillData();
    window.print();
  }

  getBillData() {
    this.orderService.bill('004').subscribe(
      (data) => {
        this.products = data;
        this.bill_no = data[0].Bill_No;
        this.order_date = data[0].Order_Date;
        this.order_time = data[0].Order_Time;
        this.subtotal = data[0].Sub_Total;
        this.cgst = data[0].CGST;
        this.sgst = data[0].SGST;
        this.taxtotal = data[0].SGST + data[0].CGST;
        this.discounttotal = data[0].Discount;
        this.total =
          Math.round(
            (this.subtotal + this.taxtotal - this.discounttotal) * 100
          ) / 100;
        this.payment_mode = data[0].Payment_Mode;
        this.paid = data[0].Received_Amount;
        this.balance_given = data[0].Balance_Given;
        this.total_text =
          this.utilityService.numWords((this.total).toFixed(2)) + ' ONLY';
        this.numbers = Array.from(Array(this.products.length).keys());
        
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
