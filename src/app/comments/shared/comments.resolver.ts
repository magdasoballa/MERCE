import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {CommentsService} from "./comments.service";
import {Comment} from './comments.model'

@Injectable({ providedIn: 'root' })

export class CommentsResolver implements Resolve<Comment[]> {
  constructor(private service: CommentsService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):  Comment[] | Observable<Comment[]> | Promise<Comment[]> {
    return this.service.getAllComments();
  }
}
