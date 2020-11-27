import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Comment} from "./comments.model";

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllComments() {
    const link = 'https://jsonplaceholder.typicode.com/comments/';
    return this.http.get<Comment[]>(link);
  }

  fetchComment(id: number) {
    const action = `https://jsonplaceholder.typicode.com/comments/${id}`;
    return this.http.get<Comment>(action);
  }

  getCommentsToPost(postId: number) {
    const comments=`https://jsonplaceholder.typicode.com/comments?postId=${postId}`

    return this.http.get<Comment[]>(comments)
  }

}
