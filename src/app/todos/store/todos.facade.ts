import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getTodos } from "./todos.actions";

@Injectable({ providedIn: 'root'})
export class TodosFacade {
  todos$ = this.store.select('todos');

  constructor(private store: Store<any>) {}

  getTodos() {
    this.store.dispatch(getTodos())
  }
}
