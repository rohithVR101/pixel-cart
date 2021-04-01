// Angular Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Components
import { AppComponent } from './app.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { SignupComponent } from './components/authentication/signup/signup.component';
import { AdminPanelHeaderComponent } from './components/admin-panel/admin-panel-header/admin-panel-header.component';
import { AdminPanelFooterComponent } from './components/admin-panel/admin-panel-footer/admin-panel-footer.component';
import { AdminPanelMenuComponent } from './components/admin-panel/admin-panel-menu/admin-panel-menu.component';
import { AdminPanelMenuItemComponent } from './components/admin-panel/admin-panel-menu-item/admin-panel-menu-item.component';
import { OrderHistoryComponent } from './components/admin-panel/content/order-history/order-history.component';
import { VendorInfoComponent } from './components/admin-panel/content/vendor-info/vendor-info.component';
import { ProductDetailsComponent } from './components/admin-panel/content/product-details/product-details.component';
import { VendorLoginHistoryComponent } from './components/admin-panel/content/vendor-login-history/vendor-login-history.component';
import { CustomerDetailsComponent } from './components/admin-panel/content/customer-details/customer-details.component';
import { VendorPanelHeaderComponent } from './components/vendor-panel/vendor-panel-header/vendor-panel-header.component';
import { ProductInfoContentComponent } from './components/vendor-panel/cart/product-info-content/product-info-content.component';
import { PriceDetailsComponentComponent } from './components/vendor-panel/cart/price-details-component/price-details-component.component';
import { VendorPanelFooterComponent } from './components/vendor-panel/vendor-panel-footer/vendor-panel-footer.component';
import { BillGeneratedMessageSnackBarComponent } from './components/vendor-panel/cart/bill-generated-message-snack-bar/bill-generated-message-snack-bar.component';
import { CustomerPhoneNumberEntryComponent } from './components/vendor-panel/cart/dialogue-box/customer-phone-number-entry/customer-phone-number-entry.component';
import { CustomerEmailNameEntryComponent } from './components/vendor-panel/cart/dialogue-box/customer-email-name-entry/customer-email-name-entry.component';
import { CustomerCashCardSelectionComponent } from './components/vendor-panel/cart/dialogue-box/customer-cash-card-selection/customer-cash-card-selection.component';
import { AmountProvidedCustomerEntryComponent } from './components/vendor-panel/cart/dialogue-box/amount-provided-customer-entry/amount-provided-customer-entry.component';
import { BalanceAmountComponent } from './components/vendor-panel/cart/dialogue-box/balance-amount/balance-amount.component';
import { ClearCartComponent } from './components/vendor-panel/cart/button/clear-cart/clear-cart.component';
import { AddProductComponent } from './components/vendor-panel/cart/button/add-product/add-product.component';
import { CancelComponent } from './components/vendor-panel/cart/button/cancel/cancel.component';
import { OkComponent } from './components/vendor-panel/cart/button/ok/ok.component';
import { CashComponent } from './components/vendor-panel/cart/button/cash/cash.component';
import { CardComponent } from './components/vendor-panel/cart/button/card/card.component';
import { BackComponent } from './components/vendor-panel/cart/button/back/back.component';
import { VendorPanelComponent } from './components/vendor-panel/vendor-panel.component';
import { BillComponent } from './components/vendor-panel/bill/bill.component';
import { CartComponent } from './components/vendor-panel/cart/cart.component';
//Material Design
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { LoginErrorComponent } from './components/authentication/login/login-error/login-error.component';
import { RazorpayComponent } from './components/vendor-panel/cart/dialogue-box/razorpay/razorpay.component';


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
    BackComponent,
    VendorPanelComponent,
    BillComponent,
    CartComponent,
    LoginErrorComponent,
    RazorpayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatRadioModule,
    MatSnackBarModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
