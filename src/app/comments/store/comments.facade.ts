import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter, mergeMap, take, tap } from "rxjs/operators";
import { getCurrentId } from "src/app/core/core.selector";
import { getComment, getComments, getCommentsToPost } from "./comments.actions";
import { selectComment } from "./comments.selector";
import { selectCommentsToPost } from '../store/comments.selector'

@Injectable({ providedIn: 'root' })

export class CommentsFacade {
  comments$ = this.store.select('comments');
  comment$ = this.store.select('comment');
  commentId: number;
  postId: number;

  constructor(private store: Store<any>) { }

  getComments() {
    this.store.dispatch(getComments())
  }


  getOneComment() {
    return this.store.pipe(
      select(getCurrentId),

      mergeMap(id => {

        this.commentId = id;
        return this.store.pipe(
          select(selectComment(id))
        )
      }),

      tap((comment) => {
        if (!comment) {
          this.store.dispatch(getComment({ id: this.commentId }))
        }
      }),
      filter(data => !!data),
      take(1)
    )
  }


  getCommentsByPostId(postId) {
    return this.store.pipe(
      select(selectCommentsToPost(postId)),
      tap(data => {
        
        if (!data.length ) {          
          this.store.dispatch(getCommentsToPost({ id: postId }))
        }

        console.log(data)
      }),
      filter(data => !!data.length),
      take(1)
    )
  }
}









