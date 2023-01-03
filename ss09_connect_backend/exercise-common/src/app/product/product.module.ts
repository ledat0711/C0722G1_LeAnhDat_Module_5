import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {ProductListComponent} from './product-list/product-list.component';

@NgModule({
  declarations: [ProductCreateComponent, ProductDeleteComponent, ProductEditComponent, ProductListComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class ProductModule { }
