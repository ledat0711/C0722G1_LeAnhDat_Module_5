import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { FacilityListComponent } from './facility/facility-list/facility-list.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import {ReactiveFormsModule} from '@angular/forms';
import { OnThiComponent } from './on-thi/on-thi.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    FacilityListComponent,
    FacilityEditComponent,
    FacilityCreateComponent,

    CustomerCreateComponent,
    CustomerListComponent,
    CustomerEditComponent,
    ContractCreateComponent,
    ContractListComponent,
    OnThiComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
