import { Injectable } from "@angular/core";
import { select, Store } from "@ngrx/store";
import { filter, mergeMap, take, tap } from "rxjs/operators";
import { getCurrentId } from "src/app/core/core.selector";
import { getPost, getPosts } from "./posts.actions";
import { selectOnePost } from "./posts.selector";

@Injectable({ providedIn: 'root'})
export class PostsFacade {
    posts$ = this.store.select('posts');  
    postId: number;
 
    constructor(private store: Store<any>) {}

    getPosts() {
        this.store.dispatch(getPosts())
    }


    getOnePost() {
        return this.store.pipe(
          select(getCurrentId),
          tap((id)=>console.log(id, 'id')
          ),
          mergeMap(id => {
            this.postId = id;
            return this.store.pipe(
              select(selectOnePost(id))
            )
          }),
          tap((data) => console.log(data, 'POST!')
          ),
          tap((post) => {
            if (!post) {
              this.store.dispatch(getPost({ id: this.postId }))
            }
          }),
          filter(data => !!data),
          take(1)
        )
      }
    }









  