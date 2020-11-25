import { createSelector } from '@ngrx/store';
import { Post } from '../shared/model';


export interface AppState {
  posts: Post[];
  id: number
}

export const selectPosts = (state: AppState) => state.posts;


export const selectOnePost = (id:number) => createSelector(
  selectPosts,
  (posts: Post[]) => {
    return posts.find(postEl => postEl.id === id)

  }
)
