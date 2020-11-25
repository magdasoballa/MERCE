import {Component, Input} from '@angular/core';
import {Todo} from "../shared/todos.model";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent  {
@Input () todos: Todo[]
}
