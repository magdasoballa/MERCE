import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../comments/shared/comments.model';

@Component({
  selector: 'app-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent  {
  @Input() comments: Comment[];

}

