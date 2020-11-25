import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { Todo } from '../shared/todos.model';
import { TodosService } from '../shared/todos.service';
import { selectTodo } from '../store/todos.selector';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent implements OnInit {
  todo$: Observable<Todo>;
  todoId: number;


  constructor(
    private activatedRoute: ActivatedRoute,
    private store: Store,
    private service: TodosService) {
  }

  ngOnInit() {
    this.todo$ = this.getTodo();
  }

  private getTodo() {
    return this.activatedRoute.params.pipe(
      map((data: { id: number }) => +data.id),
      mergeMap((id) => this.store.select(selectTodo(id))),
      mergeMap((data) => {
        let todo: Observable<Todo>;

        if (!data) {
          todo = this.service.fetchTodo(this.todoId)
        } else {
          todo = of(data);
        }
        return todo
      })
    )
  }
}
