import {createAction, props} from '@ngrx/store';
import {Todo} from '../shared/todos.model';


export const getTodos = createAction(
  '[Todos Component] Get todos from cos');

export const getTodosSuccess = createAction(
  '[Todos Component] Get Todos Success',
  props<{ todos: Todo[] }>()
);

export const getTodosError = createAction(
  '[Posts Component] Get Todos Error',
  props<{ error: any }>()
);



export const getTodo = createAction(
  '[Todo Component] Get todo from cos',
  props<{id:number}>()
  );

export const getTodoSuccess = createAction(
  '[Todo Component] Get Todo Success',
  props<{ todo: Todo}>()
);

export const getTodoError = createAction(
  '[Todo Component] Get Todo Error',
  props<{ error: any }>()
);