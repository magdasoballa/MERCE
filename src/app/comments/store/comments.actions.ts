import {createAction, props} from '@ngrx/store';
import {Comment} from '../shared/comments.model';


export const getComments = createAction('[Comments Component] Get comments from cos');
export const getCommentsSuccess = createAction(
  '[Comments Component] Get Comments Success',
  props<{ comments: Comment[] }>()
);
export const getCommentsError = createAction(
  '[Comments Component] Get Comments Error',
  props<{ error: any }>()
);
