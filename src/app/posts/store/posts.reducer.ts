import { createReducer, on } from '@ngrx/store';
import { Post } from '../shared/model';
import {Comment} from '../../comments/shared/comments.model'
import { getPostsSuccess, getPostSuccess } from './posts.actions';

export const initialState = [];

const _postsReducer = createReducer<Post[]> (
  initialState,
  on(getPostsSuccess, (state, {posts}) => [...posts]),
  on(getPostSuccess, (state, { post }) => [post]),

);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}

