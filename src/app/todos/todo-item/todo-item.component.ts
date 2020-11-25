import {Component, Input} from '@angular/core';
import {Todo} from "../shared/todos.model";

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
})
export class TodoItemComponent  {
@Input () todo: Todo;

}
