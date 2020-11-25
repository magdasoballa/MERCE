import { createReducer, on } from '@ngrx/store';
import { Todo } from '../shared/todos.model';
import { getTodosSuccess } from './todos.actions';

export const initialState = [{id: 1, completed: true, userId: 2, title: 'dupa'}];

const _todosReducer = createReducer<Todo[]>(
  initialState,
  on(getTodosSuccess, (state, {todos}) => [...todos])
);

export function todosReducer(state, action) {
  return _todosReducer(state, action);
}

