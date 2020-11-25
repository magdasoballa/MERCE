import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { getComments } from "./comments.actions";

@Injectable({ providedIn: 'root'})
export class CommentsFacade {
  comments$ = this.store.select('comments');

  constructor(private store: Store<any>) {}

  getComments() {
    this.store.dispatch(getComments())
  }
}
