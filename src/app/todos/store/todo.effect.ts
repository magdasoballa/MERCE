import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { TodosService } from '../shared/todos.service';
import { getTodos, getTodosError, getTodosSuccess } from './todos.actions';
import { getTodo, getTodoError, getTodoSuccess } from './todos.actions';
import { Todo } from "../shared/todos.model";


@Injectable()
export class TodosEffects {

  loadTodos$ = createEffect(() => this.actions$.pipe(
    ofType(getTodos),
    mergeMap(() => {
      return this.todosService.getTodos().pipe(
        map(todos => getTodosSuccess({ todos })),
        catchError(error => {
          getTodosError({ error })

          return EMPTY;
        })
      )
    })

  ));

  loadTodo$ = createEffect(() => this.actions$.pipe(
    ofType(getTodo),
    // map(action => action.id),
    mergeMap(({ id}) => {
      console.log(id)

      return this.todosService.fetchTodo(id).pipe(
        map(todo => getTodoSuccess({ todo })),
        catchError(error => {
          getTodoError({ error })

          return EMPTY;
        })
      )
    })

  ));

  constructor(
    private actions$: Actions,
    private todosService: TodosService
  ) { }
}


