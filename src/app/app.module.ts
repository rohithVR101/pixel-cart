import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { AdminPanelHeaderComponent } from './admin-panel/admin-panel-header/admin-panel-header.component';
import { AdminPanelFooterComponent } from './admin-panel/admin-panel-footer/admin-panel-footer.component';
import { AdminPanelMenuComponent } from './admin-panel/admin-panel-menu/admin-panel-menu.component';
import { AdminPanelMenuItemComponent } from './admin-panel/admin-panel-menu-item/admin-panel-menu-item.component';
import { OrderHistoryComponent } from './admin-panel/content/order-history/order-history.component';
import { VendorInfoComponent } from './admin-panel/content/vendor-info/vendor-info.component';
import { ProductDetailsComponent } from './admin-panel/content/product-details/product-details.component';
import { VendorLoginHistoryComponent } from './admin-panel/content/vendor-login-history/vendor-login-history.component';
import { CustomerDetailsComponent } from './admin-panel/content/customer-details/customer-details.component';
import { VendorPanelHeaderComponent } from './vendor-panel/vendor-panel-header/vendor-panel-header.component';
import { ProductInfoContentComponent } from './vendor-panel/product-info-content/product-info-content.component';
import { PriceDetailsComponentComponent } from './vendor-panel/price-details-component/price-details-component.component';
import { VendorPanelFooterComponent } from './vendor-panel/vendor-panel-footer/vendor-panel-footer.component';
import { BillGeneratedMessageSnackBarComponent } from './vendor-panel/bill-generated-message-snack-bar/bill-generated-message-snack-bar.component';
import { CustomerPhoneNumberEntryComponent } from './vendor-panel/dialogue-box/customer-phone-number-entry/customer-phone-number-entry.component';
import { CustomerEmailNameEntryComponent } from './vendor-panel/dialogue-box/customer-email-name-entry/customer-email-name-entry.component';
import { CustomerCashCardSelectionComponent } from './vendor-panel/dialogue-box/customer-cash-card-selection/customer-cash-card-selection.component';
import { AmountProvidedCustomerEntryComponent } from './vendor-panel/dialogue-box/amount-provided-customer-entry/amount-provided-customer-entry.component';
import { BalanceAmountComponent } from './vendor-panel/dialogue-box/balance-amount/balance-amount.component';
import { ClearCartComponent } from './vendor-panel/button/clear-cart/clear-cart.component';
import { AddProductComponent } from './vendor-panel/button/add-product/add-product.component';
import { CancelComponent } from './vendor-panel/button/cancel/cancel.component';
import { OkComponent } from './vendor-panel/button/ok/ok.component';
import { CashComponent } from './vendor-panel/button/cash/cash.component';
import { CardComponent } from './vendor-panel/button/card/card.component';
import { BackComponent } from './vendor-panel/button/back/back.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    AdminPanelHeaderComponent,
    AdminPanelFooterComponent,
    AdminPanelMenuComponent,
    AdminPanelMenuItemComponent,
    OrderHistoryComponent,
    VendorInfoComponent,
    ProductDetailsComponent,
    VendorLoginHistoryComponent,
    CustomerDetailsComponent,
    VendorPanelHeaderComponent,
    ProductInfoContentComponent,
    PriceDetailsComponentComponent,
    VendorPanelFooterComponent,
    BillGeneratedMessageSnackBarComponent,
    CustomerPhoneNumberEntryComponent,
    CustomerEmailNameEntryComponent,
    CustomerCashCardSelectionComponent,
    AmountProvidedCustomerEntryComponent,
    BalanceAmountComponent,
    ClearCartComponent,
    AddProductComponent,
    CancelComponent,
    OkComponent,
    CashComponent,
    CardComponent,
    BackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
