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
import { VendorPanelComponent } from './vendor-panel/vendor-panel.component';
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
import { BillComponent } from './vendor-panel/bill/bill.component';



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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
