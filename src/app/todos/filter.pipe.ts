import { Pipe, PipeTransform } from '@angular/core';
import { validFilters } from '../filter/filter.actions';
import { Todo } from './models/todo.models';

@Pipe({
  name: 'todoFilter'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch(filter)
    {
      case 'completed':
        return todos.filter(x=> x.complete);
      case 'pendings':
        return todos.filter(x=> !x.complete);
      default:
        return todos;
    }
  }

}
