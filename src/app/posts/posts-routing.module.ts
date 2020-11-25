import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PostsComponent } from './posts.component';
import { PostsResolver } from './shared/posts.resolver';
import {PostDetailComponent} from "./post-detail/post-detail.component";
import {DetailResolver} from "./shared/detail.resolver";
import { CommentResolver } from './shared/comment.resolver';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent
  },
  {
    path: ':id', 
    // component: PostDetailComponent, resolve: {detail: DetailResolver , comments: CommentResolver},
    component: PostDetailComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
