import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {PostsService} from "./posts.service";
import {Post} from "./model";

@Injectable({ providedIn: 'root' })

export class PostsResolver implements Resolve<Post[]> {
  constructor(private service: PostsService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post[] | Observable<Post[]> | Promise<Post[]> {
    return this.service.getPosts();
  }
}
