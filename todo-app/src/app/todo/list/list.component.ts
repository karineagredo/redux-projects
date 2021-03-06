import { Component, OnInit } from "@angular/core";
import { AppState } from "src/app/app.reducers";
import { Store } from "@ngrx/store";
import { Todo } from "../model/todo.model";
import { validFilters } from "src/app/filter/filter.actions";

@Component({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styles: []
})
export class ListComponent implements OnInit {
  todos: Todo[] = [];
  filter: validFilters;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filter = state.filter;
    });
  }
}
