import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { Store } from "@ngrx/store";
import { AppState } from "src/app/app.reducers";
import { Todo } from "../model/todo.model";
import { FormControl, Validators } from "@angular/forms";
import { ToggleTodoAction, ChangeTodoNameAction, DeleteTodoAction } from "../todo.actions";

@Component({
  selector: "app-item",
  templateUrl: "./item.component.html",
  styles: []
})
export class ItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild("txtInputElement") textInputElement: ElementRef;
  checkedField: FormControl;
  textInput: FormControl;
  editing: boolean;
  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.checkedField = new FormControl(this.todo.completed);
    this.textInput = new FormControl(this.todo.text, Validators.required);

    this.checkedField.valueChanges.subscribe(() => {
      const action = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(action);
    });
  }
  editElement() {
    this.editing = true;
    setTimeout(() => {
      this.textInputElement.nativeElement.select();
    }, 1);
  }
  finishEditing() {
    this.editing = false;
    if (this.textInput.invalid) {
      return;
    }
    if (this.textInput.value === this.todo.text) {
      return;
    }

    const action = new ChangeTodoNameAction(this.textInput.value, this.todo.id);
    this.store.dispatch(action);
  }
  deleteTodo() {
    const action = new DeleteTodoAction(this.todo.id);
    this.store.dispatch(action);
  }
}
