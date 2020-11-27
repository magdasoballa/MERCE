import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CommentsService } from 'src/app/comments/shared/comments.service';
import {  getCommentsError, getCommentsSuccess, getCommentsToPost } from 'src/app/comments/store/comments.actions';
import { PostsService } from '../shared/posts.service';
import {  getPost, getPostError, getPosts, getPostsError, getPostsSuccess, getPostSuccess } from './posts.actions';

@Injectable()
export class PostsEffects {

  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(getPosts),
    mergeMap(() => {
      return this.postsService.getPosts().pipe(
        map(posts => getPostsSuccess({ posts })),
        catchError(error => {
          getPostsError({ error })

          return EMPTY;
        })
      )
    })

  ));

  loadPost$ = createEffect(() => this.actions$.pipe(
    ofType(getPost),
    mergeMap(({ id }) => {
      console.log(id)

      return this.postsService.getDetails(id).pipe(
        map(post => getPostSuccess({ post })),
        catchError(error => {
          getPostError({ error })

          return EMPTY;
        })
      )
    })

  ));

  


  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private commentsService: CommentsService
  ) { }
}