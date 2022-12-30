import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductEditComponent} from './product/product-edit/product-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {ProductModule} from './product/product.module';
import {ProductListComponent} from './product/product-list/product-list.component';
import {CustomersModule} from './customers/customers.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    // CommonModule,
    ProductModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
