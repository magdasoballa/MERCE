import { createSelector } from '@ngrx/store'
import {Comment} from '../../comments/shared/comments.model'

export interface AppState {
  comments: Comment[];
}

export const selectAllComments = (state: AppState) => state.comments;


export const selectComments = (postId:number) => createSelector(
  selectAllComments,
  (comments: Comment[]) => {
    return comments.filter(comm => comm.postId === postId)

  }
)
