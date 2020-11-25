import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import {PostsService} from "./posts.service";
import {Post} from "./model";

@Injectable({
  providedIn: 'root',
})
export class DetailResolver implements Resolve<Post>{
  constructor(private postsService: PostsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Post| Observable<Post> | Promise<Post> {
    const {id} = route.params;
    return this.postsService.getDetails(id)
  }
}
