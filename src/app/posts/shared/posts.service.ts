import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Post} from "./model";
import {Comment} from '../../comments/shared/comments.model'

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts() {
    const posts = 'https://jsonplaceholder.typicode.com/posts/';
    return this.http.get<Post[]>(posts);
  }
  getDetails(id: number) {
    const link=`https://jsonplaceholder.typicode.com/posts/${id}`;
    return this.http.get<Post>(link)
  }

  getComments(postId: number) {
    const comments=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`

    return this.http.get<Comment[]>(comments)
  }
}
