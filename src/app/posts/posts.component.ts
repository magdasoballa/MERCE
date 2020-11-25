import { Component } from '@angular/core';
import {Post} from "./shared/model";
import {Observable} from "rxjs";

import { PostsFacade } from './store/posts.facade';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$: Observable<Post[]>  = this.postsFacade.posts$;  

  constructor(private postsFacade: PostsFacade) {
    this.postsFacade.getPosts();
  }
}
