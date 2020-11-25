import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import {CommentsRoutingModule} from "./comments-routing.module";
import {CommentsListComponent} from "./comments-list/comments-list.component";
import {CommentItemComponent} from "./comment-item/comment-item.component";
import {CommentItemInfoComponent} from "./comment-item-info/comment-item-info.component";



@NgModule({
  declarations: [
    CommentsComponent,
    CommentsListComponent,
    CommentItemComponent,
    CommentItemInfoComponent
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule
  ]
})
export class CommentsModule { }
