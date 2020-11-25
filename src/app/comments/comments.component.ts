import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {CommentsFacade} from "./store/comments.facade";
import {Comment} from '../comments/shared/comments.model'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent  {
  comments$: Observable<Comment[]>  = this.commentsFacade.comments$;

  constructor(private commentsFacade: CommentsFacade) {
    this.commentsFacade.getComments();
  }

}
