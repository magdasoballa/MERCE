import {Component, Input} from '@angular/core';
import {Comment} from '../shared/comments.model'

@Component({
  selector: 'app-comment-item',
  templateUrl: './comment-item.component.html',
})
export class CommentItemComponent  {
@Input() comment: Comment;


}
