import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {CategoryCreateComponent} from './category-create/category-create.component';
import {CategoryDeleteComponent} from './category-delete/category-delete.component';
import {CategoryEditComponent} from './category-edit/category-edit.component';
import {CategoryListComponent} from './category-list/category-list.component';

@NgModule({
  declarations: [CategoryCreateComponent, CategoryDeleteComponent, CategoryEditComponent, CategoryListComponent],
  imports: [
    CommonModule,
    CategoryRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ]
})
export class CategoryModule { }
