import { createReducer, on } from '@ngrx/store';
import { Comment } from '../shared/comments.model';
import { getCommentsSuccess, getCommentsToPost, getCommentSuccess } from './comments.actions';

export const initialState = [];

const _commentsReducer = createReducer<Comment[]>(
  initialState,
  on(getCommentsSuccess, (state, {comments}) => [...comments]),
  on(getCommentSuccess, (state, {comment}) => [comment]),


);

export function commentsReducer(state, action) {
  return _commentsReducer(state, action);
}

