import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {TodoComponent} from './todo/todo.component';
import {CategoryModule} from './category/category.module';
import {ProductModule} from './product/product.module';
import {CommonModule} from '@angular/common';

const routes: Routes = [
  {path: 'product', loadChildren: () => ProductModule},
  {path: 'category', loadChildren: () => CategoryModule},
  {path: 'todo', component: TodoComponent},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule {
}
