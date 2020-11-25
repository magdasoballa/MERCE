import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import {TodosRoutingModule} from "./todos-routing.module";
import {TodosListComponent} from "./todos-list/todos-list.component";
import {TodoItemComponent} from "./todo-item/todo-item.component";
import { TodoDetailComponent } from './todo-detail/todo-detail.component';



@NgModule({
  declarations: [
    TodosComponent,
    TodosListComponent,
    TodoItemComponent,
    TodoDetailComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
