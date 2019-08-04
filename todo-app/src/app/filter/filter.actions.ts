import { Action } from "@ngrx/store";

export const SET_FILTER = "[Filter] Set filter ";

export type validFilters = "All" | "Active" | "Completed";

export class SetfilterAction implements Action {
  readonly type = SET_FILTER;

  constructor(public filterBy: validFilters) {}
}

export type actions = SetfilterAction;
