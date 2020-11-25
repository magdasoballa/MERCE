import { createSelector } from '@ngrx/store';

import {Todo} from '../shared/todos.model';

export interface AppState {
  todos: Todo[];
}

export const selectAllTodos = (state: AppState) => state.todos;


export const selectTodo= (id:number) => createSelector(
  selectAllTodos,
  (todos: Todo[]) => {
    return todos.find(todo => todo.id === id)
  }
)
