import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  private complete = false;
  constructor(private store: Store<AppState>){}
  public toogleAll(): void {
    this.complete = !this.complete;
    this.store.dispatch(actions.toogleAll({complete: this.complete}));
  }
}
