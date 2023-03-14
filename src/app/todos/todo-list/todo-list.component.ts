import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { validFilters } from 'src/app/filter/filter.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  public todos: Todo[] = [];
  public currentFilter: validFilters = 'all';

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.store
      .subscribe(({todos, filter})=>{
        this.todos = [...todos];
        this.currentFilter = filter;
      } );  
  }
}
