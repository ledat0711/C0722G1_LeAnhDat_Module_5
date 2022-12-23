// ở đây import các module cần dùng

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PetComponent } from './pet/pet.component';
import {FormsModule} from '@angular/forms';
import { NewComponentComponent } from './new-component/new-component.component';

@NgModule({ // declarations: khai báo các component có trong module
  declarations: [
    AppComponent,
    PetComponent,
    NewComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ], // bootstrap: bệ phóng: component đầu tiên được chạy khi khởi động chương trình
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
