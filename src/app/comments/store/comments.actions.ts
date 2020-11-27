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





export const getComment = createAction('[Comment Component] Get comment from cos', props<{id: number} >());

export const getCommentSuccess = createAction(
  '[Comment Component] Get Comments Success',
  props<{ comment: Comment }>()
);

export const getCommentError = createAction(
  '[Comment Component] Get Comment Error',
  props<{ error: any }>()
);

export const getCommentsToPost = createAction('[Comments Component] Get comments to post from cos', props<{id:number}>()
);