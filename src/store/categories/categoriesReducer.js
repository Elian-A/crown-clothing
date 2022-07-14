import { CATEGORIES_ACTION_TYPES } from "./categoriesTypes";

export const INITIAL_STATE = {
  categoriesMap: {},
};
export const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { categoriesMap: payload };
    default:
      return state;
  }
};
