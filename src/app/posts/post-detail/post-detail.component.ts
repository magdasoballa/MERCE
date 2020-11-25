import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap, shareReplay, tap } from 'rxjs/operators';
import { Post } from "../shared/model";
import { Comment } from "../../comments/shared/comments.model";
import { Observable, of } from "rxjs";
import { Store } from "@ngrx/store";
import { selectOnePost } from "../store/posts.selector";
import { selectComments } from "../store/comments.selector"
import { PostsService } from '../shared/posts.service';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent {
  detail$: Observable<Post>;
  comments$: Observable<Comment[]>;
  postId: number;



  constructor(private activatedRoute: ActivatedRoute, private store: Store, private service: PostsService) {




    this.detail$ =
      activatedRoute.params.pipe(
        map((data: { id: number }) => {
          console.log('data', +data.id);
          this.postId = +data.id;
          return +data.id
        }),
        mergeMap((id) => this.store.select(selectOnePost(id))),
        mergeMap((data) => {
          if (!data) {
            return this.service.getDetails(this.postId)

          } 
          
          return of(data)
        })
      )





    this.comments$ =
      this.activatedRoute.params.pipe(
        map((data: { id: number }) => +data.id),
        mergeMap((id) => {
          this.postId = id;
          return this.store.select(selectComments(id))
        }),
        mergeMap((data) => {
          // console.log('data', data)

          if (data.length === 0) {
            return this.service.getComments(this.postId)
          }
          return [data];
        }),
      )

  }
}
