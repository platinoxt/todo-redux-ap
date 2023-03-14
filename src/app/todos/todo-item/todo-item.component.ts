import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.models';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {

  @Input() todo!: Todo;
  @ViewChild('inputElement') inputElement!: ElementRef;

  chkComplete!: FormControl;
  txtInput!: FormControl;
  editing = false;

  constructor(private store: Store<AppState>){}

  ngOnInit(): void {
    this.chkComplete = new FormControl(this.todo.complete);
    this.chkComplete.valueChanges.subscribe(() => this.store.dispatch(actions.toggle({id: this.todo.id })));
    this.txtInput = new FormControl(this.todo.text, Validators.required);
  }

  public edit(): void{
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.inputElement.nativeElement.select();
    }, 1);
  }

  public finishEdition(): void {
    this.editing = false;
    if(this.txtInput.invalid) { return; }
    if(this.txtInput.value === this.todo.text) { return; }
    this.store.dispatch(actions.edit({id: this.todo.id, text: this.txtInput.value}))

  }

  public delete(): void {
    this.store.dispatch(actions.remove({id: this.todo.id}));
  }
}
