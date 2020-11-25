import { createReducer, on } from '@ngrx/store';
import { Post } from '../shared/model';
import { getPostsSuccess } from './posts.actions';

export const initialState = [{id: 1, userId: 1,title: 'titiel', body: 'body'}];

const _postsReducer = createReducer<Post[]>(
  initialState,
  on(getPostsSuccess, (state, {posts}) => [...posts]),
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}

