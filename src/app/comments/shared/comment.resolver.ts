import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { CommentsService } from './comments.service';
import { Comment } from './comments.model';



@Injectable({
  providedIn: 'root',
})
export class CommentResolver implements Resolve<Comment>{
  constructor(private commentsService: CommentsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Comment| Observable<Comment> | Promise<Comment> {
    const {id} = route.params;
    return this.commentsService.fetchComment(id)
  }
}
