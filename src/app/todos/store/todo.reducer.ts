import { createReducer, on } from '@ngrx/store';
import { Todo } from '../shared/todos.model';
import { getTodosSuccess, getTodoSuccess } from './todos.actions';

export const initialState = [];

const _todosReducer = createReducer<Todo[]>(
  initialState,
  on(getTodosSuccess, (state, { todos }) => [...todos]),
  on(getTodoSuccess, (state, { todo }) => [todo])

);

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}

