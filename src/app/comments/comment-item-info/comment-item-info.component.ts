import { Component } from '@angular/core';
import { CommentsFacade } from '../store/comments.facade';

@Component({
  selector: 'app-comment-item-info',
  templateUrl: './comment-item-info.component.html',
})

export class CommentItemInfoComponent  {
  comment$ = this.commentsFacade.getOneComment();

  constructor(
    private commentsFacade: CommentsFacade
    ) {}




}