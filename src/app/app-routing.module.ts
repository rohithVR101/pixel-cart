import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorPanelComponent } from './components/vendor-panel/vendor-panel.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { BillComponent } from './components/vendor-panel/bill/bill.component';
import { CartComponent } from './components/vendor-panel/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'cart',
    component: VendorPanelComponent,
    children: [
      { path: '', component: CartComponent },
      { path: 'bill', component: BillComponent },
    ],
  },
  // { path: 'cart/add', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
