import { Action } from "@ngrx/store";

export const ADD_TODO = "[TODO] Add todo";
export const TOGGLE_TODO = "[TODO] Toggle todo";
export const CHANGE_TODO_NAME = "[TODO] Change todo name";
export const DELETE_TODO = "[TODO] Delete todo";
export const TOGGLE_ALL_TODO = "[TODO] Toggle ALL todo";
export const DELETE_COMPLETED_TODO = "[TODO] Delete Completed todo";

export class AddTodoAction implements Action {
  readonly type = ADD_TODO;

  constructor(public text: string) {}
}
export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {}
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public completed: boolean) {}
}

export class ChangeTodoNameAction implements Action {
  readonly type = CHANGE_TODO_NAME;
  constructor(public todoName: string, public id: number) {}
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;
  constructor(public id: number) {}
}
export class DeleteCompletedAction implements Action {
  readonly type = DELETE_COMPLETED_TODO;
}

export type Actions =
  | AddTodoAction
  | ToggleTodoAction
  | ChangeTodoNameAction
  | DeleteTodoAction
  | ToggleAllTodoAction
  | DeleteCompletedAction;
