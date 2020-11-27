import { Component } from '@angular/core';
import { Post } from "../shared/model";
import { Comment } from "../../comments/shared/comments.model";
import { Observable, of } from "rxjs";
import { PostsFacade } from '../store/posts.facade';
import { CommentsFacade } from 'src/app/comments/store/comments.facade';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent {
  detail$: Observable<Post>;
  comments$: Observable<Comment[]>;

  constructor(private postsFacade: PostsFacade,
              private commentsFacade: CommentsFacade
              ) {}
  
  ngOnInit() {
    this.detail$ = this.postsFacade.getOnePost().pipe(
      tap((post) => this.comments$ =this.commentsFacade.getCommentsByPostId(post.id) )
    )
  }
    
}
