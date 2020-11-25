import { Component, OnInit } from '@angular/core';
import {map, tap} from "rxjs/operators";
import {Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {Comment} from '../shared/comments.model'

@Component({
  selector: 'app-comment-item-info',
  templateUrl: './comment-item-info.component.html',
})
export class CommentItemInfoComponent  {
  comment$: Observable<Comment>;

  constructor(private activatedRoute: ActivatedRoute) {
    this.comment$ = this.activatedRoute.data.pipe(
      tap(()=>console.log(this.comment$)),
      map((data: {comment: Comment}) => data.comment)
    )
  }


}
