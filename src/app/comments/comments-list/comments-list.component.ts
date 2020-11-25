import {Component, Input} from '@angular/core';
import {Comment} from '../shared/comments.model'

@Component({
  selector: 'app-comments-list',
  templateUrl: './comments-list.component.html',
})
export class CommentsListComponent {
@Input() comments: Comment[];


}
