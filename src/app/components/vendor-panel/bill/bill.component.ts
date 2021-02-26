import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { BillService } from 'src/app/services/bill/bill.service';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css'],
})
export class BillComponent implements OnInit {
  @Input() order_data!: object;

  constructor(private billService: BillService) {}

  ngOnInit(): void {
    console.log(this.order_data);
    window.print();
  }
}
