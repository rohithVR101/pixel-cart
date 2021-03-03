import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  phoneno = new FormControl('', [Validators.required, Validators.email]);

  constructor() {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.phoneno.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phoneno.hasError('Phone') ? 'Not a valid phone no' : '';
  }
  hide = true;
}
