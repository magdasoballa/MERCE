import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {TodosComponent} from "./todos.component";
import {TodosResolver} from "./shared/todos.resolver";
import { TodoDetailComponent } from './todo-detail/todo-detail.component';
import { TodoResolverService } from './shared/todo-item.resolver';



const routes: Routes = [
  {
    path: '',
    component: TodosComponent, 
    // resolve: {todos: TodosResolver}
  },
  {
    path: ':id', component: TodoDetailComponent, 
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
