import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PostsService } from '../shared/posts.service';
import { getPosts, getPostsError, getPostsSuccess } from './posts.actions';

 
@Injectable()
export class PostsEffects {
 
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(getPosts),
    mergeMap(() => {
        return this.postsService.getPosts().pipe(
            map(posts => getPostsSuccess({posts})),
            catchError(error => {
                getPostsError({error})
                 
                return EMPTY;
            })
        )
    })  
  
  ));
 
  constructor(
    private actions$: Actions,
    private postsService: PostsService
  ) {}
}