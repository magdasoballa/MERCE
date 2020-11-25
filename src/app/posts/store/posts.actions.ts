import { createAction, props } from '@ngrx/store';
import { Post } from '../shared/model';


export const getPosts = createAction('[Posts Component] Get posts from cos');
export const getPostsSuccess = createAction(
    '[Posts Component] Get Posts Success',
    props<{posts: Post[]}>()
);
export const getPostsError = createAction(
    '[Posts Component] Get Posts Error',
    props<{error: any}>()
);
