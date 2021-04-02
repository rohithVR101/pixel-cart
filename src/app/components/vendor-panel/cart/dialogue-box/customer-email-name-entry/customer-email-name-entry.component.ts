import { Component, OnInit, Inject } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Customer } from 'src/app/models/Customer';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-customer-email-name-entry',
  templateUrl: './customer-email-name-entry.component.html',
  styleUrls: ['./customer-email-name-entry.component.css'],
})
export class CustomerEmailNameEntryComponent implements OnInit {
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('', [Validators.required]);
  phoneno = new FormControl('', [
    Validators.required,
    Validators.pattern('(0/91)?[7-9][0-9]{9}'),
    Validators.pattern("^[0-9]*$")
  ]);
  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<CustomerEmailNameEntryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer
  ) {}


  onNoClick(): void {
    this.dialogRef.close();
  }
  
  ngOnInit(): void {}
  getErrorMessage() {
    if (this.phoneno.hasError('required')) {
      return 'Enter a valid Phoneno';
    }

    return this.phoneno.hasError('Phone') ? 'Not a valid phone no' : '';
  }
  hide = true;

  
}
