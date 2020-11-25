import { createReducer, on } from '@ngrx/store';
import { Comment } from '../shared/comments.model';
import { getCommentsSuccess } from './comments.actions';

export const initialState = [];

const _commentsReducer = createReducer<Comment[]>(
  initialState,
  on(getCommentsSuccess, (state, {comments}) => [...comments])
);

export function commentsReducer(state, action) {
  return _commentsReducer(state, action);
}

