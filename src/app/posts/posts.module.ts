import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PostsComponent} from "./posts.component";
import {PostsRoutingModule} from "./posts-routing.module";
import {PostListComponent} from "./post-list/post-list.component";
import {PostItemComponent} from "./post-item/post-item.component";
import {PostDetailComponent} from "./post-detail/post-detail.component";
import { PostCommentComponent } from '../post-comment/post-comment.component';



@NgModule({
  declarations: [
    PostsComponent,
    PostListComponent,
    PostItemComponent,
    PostDetailComponent,
    PostCommentComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
