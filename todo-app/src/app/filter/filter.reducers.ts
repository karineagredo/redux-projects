import * as fromFilter from "./filter.actions";

const initialState: fromFilter.validFilters = "Completed";

export function filterReducer(
  state = initialState,
  action: fromFilter.actions
) {
  switch (action.type) {
    case fromFilter.SET_FILTER:
      return action.filterBy;

    default:
      return state;
  }
}
