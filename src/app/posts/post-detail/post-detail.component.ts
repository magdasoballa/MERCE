import { Component} from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {map, mergeMap, tap} from 'rxjs/operators';
import {Post} from "../shared/model";
import {Comment} from "../../comments/shared/comments.model";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {selectOnePost} from "../store/posts.selector";
import {selectComments} from "../store/comments.selector"


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent {
detail$: Observable<Post>;
comments$: Observable<Comment[]>;


  constructor(private activatedRoute: ActivatedRoute, private store: Store) {
    this.detail$ = activatedRoute.params.pipe(
      map((data: { id: number}) => +data.id),
      mergeMap((id) => this.store.select(selectOnePost(id)))
    );

    // this.comments$ = this.activatedRoute.data.pipe(
    //   map((data: {comments: Comment[]}) => {
    //     return data.comments
    //   })
    // );


  this.comments$ = activatedRoute.params.pipe(
    map((data: { id: number}) => +data.id),
    mergeMap((id) => this.store.select(selectComments(id))),
    )

  }
}
