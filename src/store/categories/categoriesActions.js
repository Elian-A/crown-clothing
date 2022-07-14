import { CATEGORIES_ACTION_TYPES } from "./categoriesTypes";

export const setCategories = (map) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: map,
});
