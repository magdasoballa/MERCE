import {createAction, props} from '@ngrx/store';
import {Todo} from '../shared/todos.model';


export const getTodos = createAction('[Todos Component] Get todos from cos');
export const getTodosSuccess = createAction(
  '[Todos Component] Get Posts Success',
  props<{ todos: Todo[] }>()
);
export const getTodosError = createAction(
  '[Posts Component] Get Posts Error',
  props<{ error: any }>()
);
