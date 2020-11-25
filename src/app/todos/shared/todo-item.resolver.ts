import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from './todos.model';
import { TodosService } from './todos.service';




@Injectable({
  providedIn: 'root',
})
export class TodoResolverService implements Resolve<Todo>{
  constructor(private service: TodosService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Todo| Observable<Todo> | Promise<Todo> {
    const {id} = route.params;
    return this.service.fetchTodo(id)
  }
}
