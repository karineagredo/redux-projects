import { Pipe, PipeTransform } from "@angular/core";
import { Todo } from "../todo/model/todo.model";
import { validFilters } from "./filter.actions";

@Pipe({
  name: "todoFilter"
})
export class FilterPipe implements PipeTransform {
  transform(todos: Todo[], filter: validFilters): Todo[] {
    switch (filter) {
      case "Active":
        return todos.filter(todo => !todo.completed);
      case "Completed":
        return todos.filter(todo => todo.completed);

      default:
        return todos;
    }
  }
}
