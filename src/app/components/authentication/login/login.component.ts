import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginErrorComponent } from './login-error/login-error.component';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  phoneno = new FormControl('', [
    Validators.required,
    Validators.pattern('(0/91)?[7-9][0-9]{9}'),
  ]);
  password = new FormControl('', [Validators.required]);

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  getErrorMessage() {
    if (this.phoneno.hasError('required')) {
      return 'Enter a valid Phoneno';
    }

    return this.phoneno.hasError('Phone') ? 'Not a valid phone no' : '';
  }
  hide = true;

  login() {
    this.authService
      .validate(this.phoneno.value, this.password.value)
      .then((response: { [statusCode: string]: any }) => {
        console.log(response['statusCode'] === 200);
        if (response['statusCode'] === 200) {
          this.authService.setUserInfo({ user: this.phoneno.value });
          this.router.navigate(['cart']);
        }
      })
      .catch((error) => {
        this.snackBar.openFromComponent(LoginErrorComponent, {
          duration: 2000,
        });
      });
  }
}
