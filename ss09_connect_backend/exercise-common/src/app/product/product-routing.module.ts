import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductCreateComponent} from './product-create/product-create.component';
import {ProductDeleteComponent} from './product-delete/product-delete.component';
import {ProductEditComponent} from './product-edit/product-edit.component';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: '', component: ProductListComponent},
  {path: 'create', component: ProductCreateComponent},
  {path: 'edit/:productId', component: ProductEditComponent},
  {path: 'delete/:productId', component: ProductDeleteComponent},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
