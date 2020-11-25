import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import {CommentsService} from "../shared/comments.service";
import {getComments, getCommentsError, getCommentsSuccess} from "./comments.actions";
import {Comment} from '../shared/comments.model'

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

  constructor(
    private actions$: Actions,
    private commentsService: CommentsService
  ) {}
}
