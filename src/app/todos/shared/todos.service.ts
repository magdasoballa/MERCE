import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from '../shared/todos.model'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(
    private http: HttpClient,
  ) { }

  getTodos() {
    const todos = 'https://jsonplaceholder.typicode.com/todos/';
    return this.http.get<Todo[]>(todos);
  }

  fetchTodo(id: number) {
    const action = `https://jsonplaceholder.typicode.com/todos/${id}`;
    return this.http.get<Todo>(action);
  }

}
