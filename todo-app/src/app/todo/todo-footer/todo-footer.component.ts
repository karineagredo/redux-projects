import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { validFilters, SetfilterAction } from "src/app/filter/filter.actions";
import { todoReducer } from "../todo.reducer";
import { Todo } from "../model/todo.model";
import { DeleteTodoAction, DeleteCompletedAction } from "../todo.actions";

@Component({
  selector: "app-todo-footer",
  templateUrl: "./todo-footer.component.html",
  styles: []
})
export class TodoFooterComponent implements OnInit {
  filters: validFilters[] = ["All", "Active", "Completed"];
  currentFilter: validFilters;
  itemLeft: number;

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.itemsLeft(state.todos);
    });
  }

  changeFilter(filter: validFilters) {
    const changeFilterAction = new SetfilterAction(filter);
    this.store.dispatch(changeFilterAction);
  }
  itemsLeft(todos: Todo[]) {
    this.itemLeft = todos.filter(todo => !todo.completed).length;
  }
  deleteCompleted() {
    const deletecompletedAction = new DeleteCompletedAction();
    this.store.dispatch(deletecompletedAction);
  }
}
