import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TodosComponent} from "./todos.component";
import {TodosResolver} from "./shared/todos.resolver";



const routes: Routes = [
  {
    path: '',
    component: TodosComponent, resolve: {todos: TodosResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
