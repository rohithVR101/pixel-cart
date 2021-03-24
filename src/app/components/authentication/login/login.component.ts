import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../../services/utility/utility.service';
@Component({
  selector: 'app-root',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  phoneno = new FormControl('', [Validators.required, Validators.email]);

  constructor(private utilityService: UtilityService, private router :Router) {}

  ngOnInit(): void {
    console.log(this.utilityService.numWords((9.9).toFixed(2)));
  }

  getErrorMessage() {
    if (this.phoneno.hasError('required')) {
      return 'You must enter a value';
    }

    return this.phoneno.hasError('Phone') ? 'Not a valid phone no' : '';
  }
  hide = true;

  login() {
    this.router.navigate(['/cart']);
  }
}
