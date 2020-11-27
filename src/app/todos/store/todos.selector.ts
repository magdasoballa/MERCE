import { ActionReducerMap, createFeatureSelector, createSelector, State } from '@ngrx/store';

import {Todo} from '../shared/todos.model';




import { routerReducer, RouterReducerState } from '@ngrx/router-store';


export const AppState =createFeatureSelector<Todo[]>('todos');
    
export const selectTodo = (id:number) => createSelector(
    
    AppState,    
    (todos: Todo[]) => {
            return todos.find(todo => todo.id === +id)
          }
    // }
)

