import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PostsService} from "./posts.service";
import { Comment } from "../../comments/shared/comments.model";

@Injectable({
  providedIn: 'root',
})
export class CommentResolver implements Resolve<Comment[]>{
  constructor(private postsService: PostsService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comment[] | Observable<Comment[]>  | Promise<Comment[]> {
    const {id} = route.params;

    return this.postsService.getComments(id)
  }
}


