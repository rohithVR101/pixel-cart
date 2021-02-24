import { Component, Inject } from '@angular/core';
import { Cart } from 'src/app/models/Cart';
import { ProductService } from 'src/app/services/product/product.service';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  constructor(
    public dialogRef: MatDialogRef<AddProductComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cart
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
