import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CustomerCreateComponent, CustomerEditComponent, CustomerListComponent],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CustomerModule {
}
