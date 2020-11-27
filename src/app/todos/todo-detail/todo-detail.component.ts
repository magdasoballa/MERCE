import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../shared/todos.model';
import { TodosFacade } from '../store/todos.facade';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
})
export class TodoDetailComponent implements OnInit {
  todo$: Observable<Todo>;

  constructor(private todosFacade: TodosFacade) { }

  ngOnInit() {
    this.todo$ = this.todosFacade.getOneTodo();
  }




}




