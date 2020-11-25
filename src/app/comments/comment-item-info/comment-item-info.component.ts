import { Component, OnInit } from '@angular/core';
import {map, mergeMap, tap} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Comment} from '../shared/comments.model'

import {CommentsService} from "../shared/comments.service";
import {Store} from "@ngrx/store";
import {selectComment} from "../store/comments.selector";

@Component({
  selector: 'app-comment-item-info',
  templateUrl: './comment-item-info.component.html',
})

export class CommentItemInfoComponent  implements OnInit{
  comment$: Observable<Comment>;
  commId:number;

  constructor(private activatedRoute: ActivatedRoute, private service: CommentsService, private store: Store) {}


  ngOnInit() {
    this.comment$ = this.getComment();
  }

  private getComment() {
    return this.activatedRoute.params.pipe(
      map((data: { id: number }) => +data.id),
      mergeMap((id) => this.store.select(selectComment(id))),
      mergeMap((data) => {
        let comment: Observable<Comment>;

        if (!data) {
          comment = this.service.fetchComment(this.commId)
        } else {
          comment = of(data);
        }

        return comment
      })
    )
  }
}
