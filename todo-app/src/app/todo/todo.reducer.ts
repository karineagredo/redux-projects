import * as fromTodo from "./todo.actions";
import { Todo } from "./model/todo.model";
import { store, restoreView } from "@angular/core/src/render3";

const todo1 = new Todo("save the world");
const todo2 = new Todo("sall Xavier and Storm");
const todo3 = new Todo("borrow makeup from wonderwoman");
todo3.completed = true;
const initialState: Todo[] = [todo1, todo2, todo3];

export function todoReducer(
  state = initialState,
  action: fromTodo.Actions
): Todo[] {
  switch (action.type) {
    case fromTodo.ADD_TODO:
      const todo = new Todo(action.text);
      return [...state, todo];
    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {
            ...todoEdit,
            completed: !todoEdit.completed
          };
        } else {
          return todoEdit;
        }
      });
    case fromTodo.TOGGLE_ALL_TODO:
      const todos2 = state.map(todoItem => {
        return { ...todoItem, completed: action.completed };
      });
      return todos2;

    case fromTodo.CHANGE_TODO_NAME:
      return state.map(todo => {
        if (todo.id === action.id) {
          const newName = { ...todo, text: action.todoName };
          console.log(newName);
          return newName;
        } else {
          return todo;
        }
      });
    case fromTodo.DELETE_TODO:
      return state.filter(todoItem => action.id !== todoItem.id);

    case fromTodo.DELETE_COMPLETED_TODO:
      return state.filter(todo => !todo.completed);
    default:
      return state;
  }
}
