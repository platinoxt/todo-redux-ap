import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as actions from '../../filter/filter.actions';
import { clearCompleted } from '../todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent implements OnInit {

  public currentFilter: actions.validFilters = 'all';
  public filters = ['all', 'completed', 'pendings'] as actions.validFilters[];
  public totalPendings = 0;

  constructor(private store: Store<AppState>){} 

  public ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.totalPendings = state.todos.filter(x=> !x.complete).length;
    });
    
  }

  public changeFilter(filter: actions.validFilters): void {
    this.store.dispatch(actions.setFilter({filter}));
  }

  public clearCompleted(): void {
    this.store.dispatch(clearCompleted());
  }
}
