import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import {CommentsComponent} from "./comments.component";
import {CommentsResolver} from "./shared/comments.resolver";
import {CommentItemInfoComponent} from "./comment-item-info/comment-item-info.component";
import {CommentResolver} from "../posts/shared/comment.resolver";




const routes: Routes = [
  {
    path: '',
    component: CommentsComponent
  },
  {
    path: ':id', component: CommentItemInfoComponent, resolve: {comment: CommentResolver}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentsRoutingModule { }
