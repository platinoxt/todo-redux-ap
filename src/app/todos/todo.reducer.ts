import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.models';
import { clearCompleted, create, edit, remove, toggle, toogleAll } from './todo.actions'

export const initialState: Todo[] = [
    new Todo('Ir al supermercado'),
    new Todo('Sacar a Yako'),
    new Todo('Sacar a Andrea')
];

export const todoReducer = createReducer(
  initialState,
  on(create, (state, { text }) => [...state, new Todo(text)]),
  on(toggle, (state, { id }) => state.map( value =>{
    if(id === value.id){
      return {
        ...value,
        complete: !value.complete
      };
    }
    return value;
  })),
  on(edit, (state, { id, text }) => state.map( value =>{
    if(id === value.id){
      return {
        ...value,
        text: text
      };
    }
    return value;
  })),
  on(remove, (state, { id }) => state.filter(todo => todo.id !== id)),
  on(toogleAll, (state, { complete }) => state.map(value => {
    return {
      ...value,
      complete: complete
    }
  })),
  on(clearCompleted, (state) => state.filter(x=> !x.complete))
);