import { createAction, props } from '@ngrx/store';
import { Post } from '../shared/model';
import {Comment} from '../../comments/shared/comments.model'


export const getPosts = createAction('[Posts Component] Get posts from cos');
export const getPostsSuccess = createAction(
    '[Posts Component] Get Posts Success',
    props<{posts: Post[]}>()
);
export const getPostsError = createAction(
    '[Posts Component] Get Posts Error',
    props<{error: any}>()
);




export const getPost = createAction('[Post Component] Get post from cos', props<{id:number}>()
);

export const getPostSuccess = createAction(
    '[Post Component] Get Post Success',
    props<{post: Post}>()
);
export const getPostError = createAction(
    '[Post Component] Get Post Error',
    props<{error: any}>()
);


