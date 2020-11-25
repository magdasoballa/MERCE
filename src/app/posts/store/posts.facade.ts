import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getPosts } from "./posts.actions";

@Injectable({ providedIn: 'root'})
export class PostsFacade {
    posts$ = this.store.select('posts');  
 
    constructor(private store: Store<any>) {}

    getPosts() {
        this.store.dispatch(getPosts())
    }
}