import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VendorPanelComponent } from './vendor-panel/vendor-panel.component';
import { LoginComponent } from './authentication/login/login.component';
import { AddProductComponent } from './vendor-panel/add-product/add-product/add-product.component';

const routes: Routes = [
  { path: '', redirectTo: 'cart', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'cart', component: VendorPanelComponent },
  // { path: 'cart/add', component: AddProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
