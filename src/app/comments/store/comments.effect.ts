import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {CommentsService} from "../shared/comments.service";
import {getComment, getCommentError, getComments, getCommentsError, getCommentsSuccess, getCommentsToPost, getCommentSuccess} from "./comments.actions";

@Injectable()
export class CommentsEffects {

  loadComments$ = createEffect(() => this.actions$.pipe(
    ofType(getComments),
    mergeMap(() => {
      return this.commentsService.getAllComments().pipe(
        map(comments => getCommentsSuccess({comments})),
        catchError(error => {
          getCommentsError({error})

          return EMPTY;
        })
      )
    })

  ));
  loadComment$ = createEffect(() => this.actions$.pipe(
    ofType(getComment),
    mergeMap(({ id }) => {
      return this.commentsService.fetchComment(id).pipe(
        map(comment => getCommentSuccess({ comment })),
        catchError(error => {
          getCommentError({ error })

          return EMPTY;
        })
      )
    })

  ));

  loadCommentsToPost$ = createEffect(() => this.actions$.pipe(
    ofType(getCommentsToPost),
    mergeMap(({ id }) => {
      console.log(id)
      return this.commentsService.getCommentsToPost(id).pipe(
        map(comments => getCommentsSuccess({ comments })),
        catchError(error => {
          getCommentsError({ error })

          return EMPTY;
        })
      )
    })

  ));

  constructor(
    private actions$: Actions,
    private commentsService: CommentsService
  ) {}
}
