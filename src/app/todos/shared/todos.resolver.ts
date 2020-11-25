import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Todo} from "./todos.model";
import {Post} from "../../posts/shared/model";
import {TodosService} from "./todos.service";

@Injectable({ providedIn: 'root' })

export class TodosResolver implements Resolve<Todo[]> {
  constructor(private service: TodosService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Todo[] | Observable<Todo[]> | Promise<Todo[]> {
    return this.service.getTodos();
  }
}
