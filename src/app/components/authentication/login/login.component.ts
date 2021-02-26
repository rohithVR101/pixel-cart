// import { Component, OnInit } from '@angular/core';
// import { FormControl, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css'],
// })
// export class LoginComponent implements OnInit {
//   email = new FormControl('', [Validators.required, Validators.email]);

//   constructor() {}

//   ngOnInit(): void {}

//   getErrorMessage() {
//     if (this.email.hasError('required')) {
//       return 'You must enter a value';
//     }

//     return this.email.hasError('email') ? 'Not a valid email' : '';
//   }
// }
import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
// <<<<<<< HEAD
  title = 'pixel-cart';
  
  email = new FormControl('', [Validators.required, Validators.email]);
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  hide = true;
  title = 'PIXEL CART';
// >>>>>>> a6c90d13f59e884dc44c79f6a2156ce5edc8d851
}
