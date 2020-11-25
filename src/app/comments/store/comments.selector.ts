import { createSelector } from '@ngrx/store';

import {Comment} from '../shared/comments.model';

export interface AppState {
  comments: Comment[];
}

export const selectAllComments = (state: AppState) => state.comments;


export const selectComment= (id:number) => createSelector(
  selectAllComments,
  (comments: Comment[]) => {
    return comments.find(comm => comm.id === id)
  }
)
