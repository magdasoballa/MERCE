import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { generate } from "rxjs";
import { filter, mergeMap, take, tap } from "rxjs/operators";
import { getCurrentId } from "../../core/core.selector";
import { getTodos, getTodo } from "./todos.actions";
import { selectTodo } from "./todos.selector";


@Injectable({ providedIn: 'root' })
export class TodosFacade {
  todos$ = this.store.select('todos');
  todoId: number;

  constructor(private store: Store<any>) { }

  getTodos() {
    this.store.dispatch(getTodos())
  }

  getOneTodo() {
    return this.store.pipe(
      select(getCurrentId),
      mergeMap(id => {
        this.todoId = id;
        return this.store.pipe(
          select(selectTodo(id))
        )
      }),
      tap((todo) => {
        if (!todo) {
          this.store.dispatch(getTodo({ id: this.todoId }))
        }
      }),
      filter(data => !!data),
      take(1)
    )
  }
}
